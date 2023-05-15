import 'api/auth';
import 'dotenv/config';
import 'tasks';

import login from 'api/auth/login';
import register from 'api/auth/register';
import { listenFn } from 'controllers/listenFn';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import ip from 'ip';
import morgan from 'morgan';
import { logger } from 'tools';
import { errorHandler, storeLog } from 'utils';
import { connectDb } from 'db';

const server = express();

const { PORT } = process.env;

// Settings
const whiteList: string[] = ['https://localhost:3000'];

const limiter = rateLimit({ windowMs: 3600000, max: 10 });

const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (whiteList.indexOf(origin as string) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

server.use((req, res, next) => {
  const ipAddress = ip.address();

  logger.info(`Method: ${req.method}, URL: ${req.url}, IP: ${ipAddress}`);

  storeLog(
    `Method: ${req.method}, URL: ${req.url}, IP: ${ipAddress}`,
    req.method,
    req.url
  );

  // eslint-disable-next-line no-console
  console.log(`Method: ${req.method}, URL: ${req.url}, IP: ${ipAddress}`);

  next();
});

connectDb();
server.use(cors(corsOptions));
server.use(limiter);
server.use(express.json({ type: 'application/json', limit: '1kb' }));
server.use(express.urlencoded({ extended: true }));
server.use(morgan('dev'));
server.use(helmet());
server.use(login);
server.use(register);
server.use((_, res) => res.send('This route does not exist!'));
server.use(errorHandler);

export const port = PORT || 5000;

server.listen(port, listenFn);
