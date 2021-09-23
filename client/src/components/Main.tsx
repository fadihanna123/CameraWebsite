import { Redirect, Route, Switch } from "react-router-dom";

import About from "../containers/About";
import Logout from "../containers/auth/Logout";
import Register from "../containers/auth/Register";
import Contact from "../containers/Contact";
import Profile from "../containers/dashboard/Profile";
import Error from "../containers/Error";
import Start from "../containers/Start";

const Main: React.FC = () => (
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
