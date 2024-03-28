import { useEffect, useState } from "react";
import CartCard from "./CartCard";
import prod from '../../../AllProduct.json';

interface IndiValue {
  image: string;
  name: string;
  model: string;
  price: number;
}

const Summary: React.FC = () => {
  const [allProduct, setAllProduct] = useState<IndiValue[]>([]);

  useEffect(() => {
    setAllProduct(prod.AllProduct);
  }, []);

  return (
    <div>
      {allProduct.map((product, index) => (
        <CartCard key={index} singleProduct={product} />
      ))}
    </div>
  );
};

export default Summary;
