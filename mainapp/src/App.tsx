import LoginPage from "./components/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ServicesList } from "./components/ServicesList";
import Summary from 'servicetwo/Summary';
import LandingPage from "./components/LandingPage";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/servicelist" element={<ServicesList />} />
          <Route path="/product" element={<LandingPage />} />
          <Route path="/cart" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
