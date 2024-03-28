import LoginPage from "./components/LoginPage";
// import Demo from "./components/Demo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ServicesList } from "./components/ServicesList";
import Summary from 'servicetwo/Summary';
import CardComp from 'serviceone/CardComp';
import { useSelector } from 'react-redux';
import { RootStore } from "./redux/Store";

function App() {
  let selector = useSelector((state: RootStore) => state.product.allProducts);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/servicelist" element={<ServicesList />} />
          <Route path="/product" element={<CardComp />} />
          <Route path="/cart" element={<Summary product={selector} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
