// @ts-check
import 'api/auth';
import 'dotenv/config';
import 'tasks';

import login from 'api/auth/login';
import register from 'api/auth/register';
import { listenFn } from 'controllers/listenFn';
import express, { Application } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { logger } from 'tools';
import { errorHandler, storeLog, allowedURLs } from 'utils';
import { connectDb } from 'db';
import cors, { CorsOptions } from 'cors';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const server: Application = express();

const { PORT } = process.env;

// Settings
const limiter = rateLimit({ windowMs: 3600000, max: 10 });
const whiteList = allowedURLs?.split(', ');

server.use((req, res, next) => {
  logger.info(`Method: ${req.method}, URL: ${req.url}`);

  storeLog(`Method: ${req.method}, URL: ${req.url}`, req.method, req.url);

  // eslint-disable-next-line no-console
  console.log(`Method: ${req.method}, URL: ${req.url}`);

  next();
});

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (whiteList?.indexOf(origin as string) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

// Use CORS.
server.use(cors(corsOptions));
// Handle connection to database.
connectDb();
// Limit api requests by number.
server.use(limiter);
// Parse JSON bodies (as send by API clients) and add 1 kb limit to sending json.
server.use(express.json({ type: 'application/json', limit: '1kb' }));
// Parse URL-encoded bodies (as sent by HTML forms)
server.use(express.urlencoded({ extended: true }));
// Add security to the server.
server.use(helmet());
// Use login routes.
server.use(login);
// Use register routes.
server.use(register);
// Handle if someone access unknown or not found route.
server.use((_, res) => res.send('This route does not exist!'));
// Handle errors.
server.use(errorHandler);

export const port = PORT || 5000;

if (process.env.NODE_ENV !== 'test') {
  // Start the server.
  server.listen(port, listenFn);
}

export default server;
