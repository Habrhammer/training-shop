import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./pages/main/MainPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
