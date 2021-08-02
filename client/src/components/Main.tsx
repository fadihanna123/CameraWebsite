import { Redirect, Route, Switch } from "react-router-dom";

import About from "./About";
import Logout from "./auth/Logout";
import Register from "./auth/Register";
import Contact from "./Contact";
import Profile from "./dashboard/Profile";
import Error from "./Error";
import Start from "./Start";

const Main = () => (
  <Switch>
    <Route exact path="/" component={() => <Start />} />
    <Route exact path="/About" component={() => <About />} />
    <Route exact path="/Contact" component={() => <Contact />} />
    <Route exact path="/Register" component={() => <Register />} />
    <Route exact path="/Dashboard" component={() => <Profile />} />
    <Route exact path="/Logout" component={() => <Logout />} />
    <Route component={Error} />
    <Redirect to="/Start" />
  </Switch>
);

export default Main;
