import { Route, Routes } from "react-router-dom";

import About from "../containers/About";
import Logout from "../containers/auth/Logout";
import Register from "../containers/auth/Register";
import Contact from "../containers/Contact";
import Profile from "../containers/dashboard/Profile";
import Error from "../containers/Error";
import Start from "../containers/Start";

const Main: React.FC = () => (
  <Routes>
    <Route path="/" element={<Start />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Dashboard" element={<Profile />} />
    <Route path="/Logout" element={<Logout />} />
    <Route element={<Error />} />
  </Routes>
);

export default Main;
