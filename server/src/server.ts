import 'api/auth';
import 'dotenv/config';

import login from 'api/auth/login';
import register from 'api/auth/register';
import { listenFn } from 'controllers/listenFn';
import cors from 'cors';
import express from 'express';
import fs from 'fs';
import helmet from 'helmet';
import https from 'https';
import morgan from 'morgan';
import { crtFile, errorHandler, keyFile } from 'utils';

const server = express();

const { PORT } = process.env;

// Settings
const whiteList: string[] = ['http://localhost:3000'];

const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

const httpsOptions = {
  key: fs.readFileSync(keyFile as string),
  cert: fs.readFileSync(crtFile as string),
};

server.use(cors(corsOptions));
server.use(express.json({ type: 'application/json', limit: '1kb' }));
server.use(express.urlencoded({ extended: true }));
server.use(morgan('dev'));
server.use(helmet());
server.use(login);
server.use(register);
server.use(errorHandler);

export const port: number = parseInt(PORT as string, 10);

https.createServer(httpsOptions, server).listen(port, listenFn);
