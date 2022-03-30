import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./views/main/MainPage";
import ProductPage from "./views/product/ProductPage";
import CategoryPage from "./views/category/CategoryPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { requestProducts } from "./redux/reducers/productsReducer";
import Loader from "./components/loader/Loader";
import ErrorBlock from "./components/error/ErrorBlock";

function App({ data }) {
  const goods = useSelector(({ products }) => {
    return products;
  });


  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestProducts());
  }, [dispatch]);
  // const [isShow, setShow] = useState(false)
  return (
    <div className="app" data-test-id="app">
      {goods.isLoading && <Loader data-test-id="loader" />}
      <Header headerData={data.header} />
      {goods.isError && (
        <ErrorBlock data-test-id="error" statusError={goods.isError} />
      )}
      <Switch>
        <Route
          exact
          path="/"
          component={() => <MainPage goods={goods} data={data.mainPage} />}
        />
        <Route
          exact
          path="/women"
          component={() => <CategoryPage category="women" goods={goods} />}
        />
        <Route
          exact
          path="/men"
          component={() => <CategoryPage category="men" goods={goods} />}
        />
        <Route
          path="/women/:id"
          component={() => <ProductPage goods={goods} productType="women" />}
        />
        <Route
          path="/men/:id"
          component={() => <ProductPage goods={goods} productType="men" />}
        />
      </Switch>
      <Footer data={data.footer} footerFormId="footerSubscribeForm" />
    </div>
  );
}

export default App;
