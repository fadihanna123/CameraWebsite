import "./config/database";
import { server } from "./config/GlobalSettings";

const { PORT } = process.env;
const port: number = parseInt(<string>PORT);
server.listen(port, () =>
  console.log(` \n Server started on port ${port} \n `)
);
