import 'api/auth';
import 'dotenv/config';

import login from 'api/auth/login';
import register from 'api/auth/register';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { logger } from 'tools';
import { errorHandler } from 'utils';

const server = express();

const { PORT } = process.env;

// Settings
const whiteList: string[] = ["http://localhost:3000"];

const corsOptions = {
    origin: (origin: any, callback: any) => {
        if (whiteList.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};

server.use(cors(corsOptions));
server.use(express.json({ type: "application/json", limit: "1kb" }));
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use(helmet());
server.use(login);
server.use(register);
server.use(errorHandler);

const port: number = parseInt(PORT as string, 10);

server.listen(port, () =>
    logger.debug(` \n Server started on port ${port} \n `)
);
