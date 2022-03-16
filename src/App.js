import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./views/main/MainPage";
import ProductPage from "./views/product/ProductPage";
import CategoryPage from "./views/category/CategoryPage";
// import { useState } from "react";

function App({ data, goods }) {
  // const [isShow, setShow] = useState(false)
  return (
    <div className="app" data-test-id="app">
      <Header headerData={data.header} />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <MainPage goods={goods} data={data.mainPage} />}
        />
        <Route
          exact
          path="/women"
          component={() => (
            <CategoryPage
              dataFilter={data.filter}
              category="women"
              data={data.mainPage}
              goods={goods}
            />
          )}
        />
        <Route
          exact
          path="/men"
          component={() => (
            <CategoryPage
              dataFilter={data.filter}
              category="men"
              data={data.mainPage}
              goods={goods}
            />
          )}
        />
        <Route
          path="/women/:id"
          component={() => (
            <ProductPage
              data={data.mainPage}
              goods={goods}
              productType="women"
            />
          )}
        />
        <Route
          path="/men/:id"
          component={() => (
            <ProductPage data={data.mainPage} goods={goods} productType="men" />
          )}
        />
      </Switch>
      <Footer data={data.footer} />
    </div>
  );
}

export default App;
