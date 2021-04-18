import PropTypes from "prop-types";
import { Redirect, Route, Switch } from "react-router-dom";
import { Props } from "typings";

import About from "./About";
import Contact from "./Contact";
import Profile from "./Dashboard/Profile";
import Error from "./Error";
import Logout from "./Logout";
import Register from "./Register";
import Start from "./Start";

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
