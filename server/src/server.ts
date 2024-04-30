// @ts-check
import 'dotenv/config';
import 'tasks';

import login from 'api/auth/login';
import register from 'api/auth/register';
import { listenFn } from 'controllers/listenFn';
import express, { Application } from 'express';
import helmet from 'helmet';
import { logger } from 'tools';
import { errorHandler, storeLog, allowedURLs } from 'utils';
import { connectDb } from 'db';
import cors, { CorsOptions } from 'cors';
import { rateLimit } from 'express-rate-limit';
import ip from 'ip';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

// deepcode ignore UseCsurfForExpress: CSurf package is deprecated.
const server: Application = express();

const { PORT } = process.env;

// Settings
const whiteList = allowedURLs?.split(', ');
const limiter = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100,
};

server.use((req, res, next) => {
  logger.info(`${req.method}, ${req.url}, ${ip.address()}`);

  storeLog(
    `Method: ${req.method}, ${req.url}, ${ip.address()}`,
    req.method,
    req.url
  );

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
// Restrict counts of requests.
server.use(rateLimit(limiter));
// Handle connection to database.
connectDb();
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
