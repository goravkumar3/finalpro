import { BrowserRouter } from "react-router-dom";
import Navigator from "./config/Navigator";
import Nav from "./Component/Nav";
import Header from "./Component/Header";
import "./App.css";
import Footer from "./Component/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Navigator />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
