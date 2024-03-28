import LoginPage from "./components/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ServicesList } from "./components/ServicesList";
import Summary from 'servicetwo/Summary';
import LandingPage from "./components/LandingPage";
import { useSelector } from "react-redux";
import { RootStore } from "./redux/Store";

function App() {
  let selector = useSelector((state: RootStore) => state.product.allProducts);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/servicelist" element={<ServicesList />} />
          <Route path="/product" element={<LandingPage product={selector} />} />
          <Route path="/cart" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
