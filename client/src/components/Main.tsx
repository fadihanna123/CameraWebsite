import { Switch, Route, Redirect } from "react-router-dom";
import Start from "./Start";
import Contact from "./Contact";
import About from "./About";

import Error from "./Error";

const Main = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={() => <Start />} />
        <Route exact path="/About" component={() => <About />} />
        <Route exact path="/Contact" component={() => <Contact />} />
        <Route component={Error} />
        <Redirect to="/Start" />
      </Switch>
    </>
  );
};

export default Main;
