import "normalize.css";
import "Sass/_main.scss";

import App from "App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
