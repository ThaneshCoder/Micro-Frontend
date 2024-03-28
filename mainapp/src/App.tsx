import "./App.css";
import SampleComp from "serviceone/SampleComp";
import DemoComp from "servicetwo/DemoComp";

function App() {
  return (
    <>
      <SampleComp />
      <DemoComp />
      <h1 className="text-3xl font-bold underline hover:text-sky-400">
        This is mainapp
      </h1>
    </>
  );
}

export default App;
