import { Redirect, Route, Switch } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Register from "./Register";
import Start from "./Start";

const Main = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={() => <Start />} />
        <Route exact path="/About" component={() => <About />} />
        <Route exact path="/Contact" component={() => <Contact />} />
        <Route exact path="/Register" component={() => <Register />} />
        <Route component={Error} />
        <Redirect to="/Start" />
      </Switch>
    </>
  );
};

export default Main;
