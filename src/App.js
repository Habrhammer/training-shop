import "./App.scss";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./views/main/MainPage";
import ProductPage from "./views/product/ProductPage";
import CategoryPage from "./views/category/CategoryPage";

function App({ data }) {
  console.log(data);
  return (
    <Router>
      <div className="app" data-set-id="app">
        <Header headerData={data.header} />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <MainPage data={data.mainPage} />}
          />
          <Route exact path="/product" component={ProductPage} />
          <Route
            exact
            path="/women"
            component={() => <CategoryPage dataFilter={data.filter} category="women" data={data.mainPage} />}
          />
          <Route
            exact
            path="/men"
            component={() => <CategoryPage dataFilter={data.filter} category="men" data={data.mainPage} />}
          />
        </Switch>
        <Footer data={data.footer} />
      </div>
    </Router>
  );
}

export default App;
