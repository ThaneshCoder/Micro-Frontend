import LoginPage from "./components/LoginPage";
import Demo from "./components/Demo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ServicesList } from "./components/ServicesList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/servicelist" element={<ServicesList />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
