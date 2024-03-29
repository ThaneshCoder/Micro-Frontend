import React, { useEffect, useState } from "react";
import CartCard from "./CartCard";

interface IndiValue {
  image: string;
  name: string;
  model: string;
  price: number;
}

const Summary: React.FC<{ product: IndiValue[] }> = ({ product }) => {
  const [allProduct, setAllProduct] = useState<IndiValue[]>([]);

  useEffect(() => {
    setAllProduct(product);
  }, [product]); // Run effect whenever product prop changes

  return (
    <div>
      {allProduct.map((product, index) => (
        <CartCard key={index} singleProduct={product} />
      ))}
    </div>
  );
};

export default Summary;
