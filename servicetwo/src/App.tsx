import "./App.css";
import jsonProd from '../../AllProduct.json'

function App() {
  return (
    <div>
      <Summary product={jsonProd.AllProduct}/>
    </div>
  );
}

export default App;
