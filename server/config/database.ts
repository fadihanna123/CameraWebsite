import "dotenv/config";

import mongoose from "mongoose";

mongoose.connect(
  <string>process.env.DATABASE_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log(" \n Connected... \n")
);
