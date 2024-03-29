import LoginPage from "./components/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ServicesList } from "./components/ServicesList";
import LandingPage from "./components/LandingPage";
import { RootStore } from "./redux/Store";
import { useSelector } from "react-redux";
import CardComp from 'serviceone/CardComp';
import Summary from 'servicetwo/Summary';

function App() {
  let selector = useSelector((state: RootStore) => state.product.allProducts);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="servicelist" element={<ServicesList />} />
          <Route path="landingPage" element={<LandingPage />} >
            <Route path="Product" element={<CardComp product={selector} />} />
            <Route path="cart" element={<Summary product={selector} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
