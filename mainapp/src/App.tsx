import LoginPage from "./components/LoginPage";
// import Demo from "./components/Demo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ServicesList } from "./components/ServicesList";
import Summary from 'servicetwo/Summary';
import CardComp from 'serviceone/CardComp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/servicelist" element={<ServicesList />} />
          <Route path="/product" element={<CardComp />} />
          <Route path="/cart" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
