import React from "react";
import { HashRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import data from "./data/data.js";
import { PRODUCTS } from "./data/products.js";
import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <App data={data} goods={PRODUCTS} />
      </ScrollToTop>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
