import { useSelector } from "react-redux";
import { Tanay } from "../redux/Store";

const Demo = () => {
  let selector = useSelector((state: Tanay) => state.product.allProducts);

  return (
    <div>
      <h1>Demo for redux</h1>
      {selector.map((e) => {
        return <h1>{e.name}</h1>;
      })}
    </div>
  );
};

export default Demo;
