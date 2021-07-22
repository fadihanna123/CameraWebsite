import { Redirect, Route, Switch } from "react-router-dom";

import About from "./About";
import Logout from "./Auth/Logout";
import Register from "./Auth/Register";
import Contact from "./Contact";
import Profile from "./Dashboard/Profile";
import Error from "./Error";
import Start from "./Start";

const Main = () => {
  return (
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
};

export default Main;
