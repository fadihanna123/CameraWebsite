import "dotenv/config";
import login from "./api/auth/login";
import register from "./api/auth/register";

import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import "./api/auth";

const server = express();

const { PORT, DATABASE_URL } = process.env;

mongoose.connect(<string>DATABASE_URL, () =>
  console.log(" \n Connected... \n")
);

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
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use(login);
server.use(register);

const port: number = parseInt(<string>PORT);

server.listen(port, () =>
  console.log(` \n Server started on port ${port} \n `)
);
