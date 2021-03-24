import { Model, model, Schema } from "mongoose";

import { IUsers } from "../typings";

const UsersSchema: Schema = new Schema(
  {
    uname: { type: String, required: true },
    emaiL: { type: String, required: true },
    mobnr: { type: String },
    psw: { type: String, required: true },
    locked: { type: Number },
  },
  { collection: "users" }
);

export const Users: Model<IUsers> = model<IUsers>(
  "users",
  UsersSchema,
  "users"
);
