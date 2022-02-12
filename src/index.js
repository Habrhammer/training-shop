import React from "react";
import { HashRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import data from "./data/data.js";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App data={data} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
