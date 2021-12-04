import "dotenv/config";
import login from "./api/auth/login";
import register from "./api/auth/register";

import cors from "cors";
import express from "express";

import morgan from "morgan";
import "./api/auth";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
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

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use(login);
server.use(register);

const port: number = parseInt(<string>PORT);

server.listen(port, () =>
  console.log(` \n Server started on port ${port} \n `)
);
