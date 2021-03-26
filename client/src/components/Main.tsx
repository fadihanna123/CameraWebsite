import { Redirect, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Register from "./Register";
import Profile from "./Dashboard/Profile";
import Logout from "./Logout";

import Start from "./Start";
import { Props } from "../typings";

const Main = ({ login }: Props) => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={() => <Start />} />
        <Route exact path="/About" component={() => <About />} />
        <Route exact path="/Contact" component={() => <Contact />} />
        <Route
          exact
          path="/Register"
          component={() => <Register login={login} />}
        />
        <Route
          exact
          path="/Dashboard"
          component={() => <Profile login={login} />}
        />
        <Route
          exact
          path="/Logout"
          component={() => <Logout login={login} />}
        />
        <Route component={Error} />
        <Redirect to="/Start" />
      </Switch>
    </>
  );
};

Main.propTypes = { login: PropTypes.bool.isRequired };

export default Main;
