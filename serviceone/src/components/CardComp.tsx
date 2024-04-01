
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

// Defined Product interface with a different name
interface IndiValue {
  id: number;
  name: string;
  model: string;
  price: number;
  discount: number;
  category: string;
  instock: number;
  image: string;
};

interface mainProd {
  product: IndiValue[];
  cartAction: any;
  cartdispatch: any;
}

const CardComp: React.FC<mainProd> = ({
  product,
  cartdispatch,
  cartAction,
}) => {
  const [allProduct, setAllProduct] = useState<IndiValue[]>([]);

  useEffect(() => {
    setAllProduct(product);
  }, [product]);

  return (
    <>
      <div className="flex flex-wrap justify-evenly">
        {allProduct
          ? allProduct.map((allProduct) => (
            <SingleCard  key={allProduct.id} singleProduct={allProduct} addCart={cartAction} cartDispatch={cartdispatch} />
          ))
          : null}
      </div>
    </>
  );
};

export default CardComp;
