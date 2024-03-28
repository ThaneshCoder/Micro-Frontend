import SampleComp from "serviceone/SampleComp";
// import Summary from 'servicetwo/Summary';
import LoginPage from "./components/LoginPage";
import Demo from "./components/Demo";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <SampleComp/>
      {/* <LoginPage />
      <Demo/> */}
      <h1 className="bg-slate-500">This is main</h1>
      <Cart/>
    </div>
  );
}

export default App;
