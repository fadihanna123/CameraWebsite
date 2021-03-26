import { Model, model, Schema } from "mongoose";

import { IUsers } from "../typings";

const UsersSchema: Schema = new Schema(
  {
    uname: { type: String, required: true },
    email: { type: String, required: true },
    mobnr: { type: String },
    psw: { type: String, required: true },
    img: { type: String },
    locked: { type: Number },
  },
  { collection: "users" }
);

export const Users: Model<IUsers> = model<IUsers>(
  "users",
  UsersSchema,
  "users"
);
