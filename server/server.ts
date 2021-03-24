import "./config/database";
import UserRoutes from "./api/AuthRoutes";
import { server } from "./config/GlobalSettings";

server.use(UserRoutes);

const port: number = 5000;

server.listen(port, () =>
  console.log(` \n Server started on port ${port} \n `)
);
