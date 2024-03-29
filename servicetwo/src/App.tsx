import "./App.css";
import jsonProd from '../../AllProduct.json'

function App() {
  return (
    <div className="bg-slate-700">
      <Summary product={jsonProd.AllProduct}/>
    </div>
  );
}

export default App;