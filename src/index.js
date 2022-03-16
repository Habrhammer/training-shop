import React from "react";
import { HashRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import data from "./data/data.js";
import { PRODUCTS } from "./data/products.js";
import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import { Provider } from "react-redux";
import { store } from "./redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <App data={data} goods={PRODUCTS} />
        </ScrollToTop>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
