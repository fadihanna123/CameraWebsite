// @ts-check
import 'dotenv/config';
import '@core/tasks';

import authRoutes from '@core/api/auth/routes';
import userRoutes from '@core/api/users/routes';
import { listenFn } from '@core/controllers';
import express, { Application } from 'express';
import helmet from 'helmet';
import { logger } from '@core/tools';
import { storeLog, allowedURLs } from '@core/utils';
import { connectDb } from '@core/db';
import cors, { CorsOptions } from 'cors';
import { rateLimit } from 'express-rate-limit';
import fileUpload from 'express-fileupload';

/**
 * @author Fadi Hanna
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
  logger.info(`${req.method}, ${req.url}`);

  storeLog(`Method: ${req.method}, ${req.url}}`, req.method, req.url);

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
// Add file upload middleware.
server.use(fileUpload() as any);
// Use routes.
server.use('/api/auth/', authRoutes);
server.use('/api/users', userRoutes);

export const port = PORT ?? 5000;

if (process.env.NODE_ENV !== 'test') {
  // Start the server.
  server.listen(port, listenFn);
}

export default server;
