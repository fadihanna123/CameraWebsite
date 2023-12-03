// @ts-check
import 'api/auth';
import 'dotenv/config';
import 'tasks';

import login from 'api/auth/login';
import register from 'api/auth/register';
import { listenFn } from 'controllers/listenFn';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { logger } from 'tools';
import { errorHandler, storeLog } from 'utils';
import { connectDb } from 'db';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const server = express();

const { PORT } = process.env;

// Settings

const limiter = rateLimit({ windowMs: 3600000, max: 10 });

server.use((req, res, next) => {
  logger.info(`Method: ${req.method}, URL: ${req.url}`);

  storeLog(`Method: ${req.method}, URL: ${req.url}`, req.method, req.url);

  // eslint-disable-next-line no-console
  console.log(`Method: ${req.method}, URL: ${req.url}`);

  next();
});

connectDb();
server.use(limiter);
server.use(express.json({ type: 'application/json', limit: '1kb' }));
server.use(express.urlencoded({ extended: true }));
server.use(helmet());
server.use(login);
server.use(register);
server.use((_, res) => res.send('This route does not exist!'));
server.use(errorHandler);

export const port = PORT || 5000;

if (process.env.NODE_ENV !== 'test') {
  server.listen(port, listenFn);
}

export default server;
