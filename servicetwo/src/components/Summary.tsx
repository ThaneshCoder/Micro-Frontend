import React, { useEffect, useState } from "react";
import CartCard from "./CartCard";

interface IndiValue {
  id: number;
  name: string;
  model: string;
  price: number;
  discount: number;
  category: string;
  instock: number;
  count: number;
  image: string;
}

const Summary: React.FC<{
  product: IndiValue[];
  cartdispatch: any;
  incAction: any;
  decAction: any;
  removeAction: any;
}> = ({ product, cartdispatch, incAction, decAction, removeAction }) => {
  const [totalPrice, setTotalPrice] = useState(0); // sum of the cart

  const [signal, setSignal] = useState(false); // update the qyt when count updated

  useEffect(() => {
    const totalPrice = product.reduce((accumulator, currentProduct) => {
      return accumulator + currentProduct.price * currentProduct.count;
    }, 0);
    setTotalPrice(totalPrice);
  }, [signal]);

  return (
    <div className="sm:flex-grow md:flex lg:flex flex-wrap sm:justify-center md:lg:justify-start">
      <div className=" lg:w-7/12 md:w-6/12 sm:w-auto p-1">
        {product
          ? product.map((cartProd) => (
              <CartCard
                key={cartProd.id}
                singleProduct={cartProd}
                inc={incAction}
                dec={decAction}
                itemDispatch={cartdispatch}
                removeItem={removeAction}
                change={setSignal}
              />
            ))
          : null}
      </div>

      <div className=" lg:w-5/12 md:w-5/12 mb-16">
        <div
          className="flex flex-col lg:right-0 md:right-0  px-10  bg-white shadow-xl lg:fixed md:fixed lg:w-5/12 md:w-5/12"
          style={{ height: "88%" }}
        >
          <div className="text-3xl  font-medium text-gray-900 p-2 text-center w-full">
            Item Summary
          </div>
          <div className="relative flex justify-between pb-2  border-b-2">
            <div className="text-2xl text-gray-900 text-center w-2/5 ">
              Product
            </div>
            <div className="absolute text-2xl text-gray-900 text-center left-1/2">
              Qty
            </div>
            <div className="text-2xl text-gray-900 text-center w-2/5 ">Rs.</div>
          </div>
          <div
            className=" flex-1 overflow-y-auto px-4 py-1 sm:px-6"
            style={{ height: "70%" }}
          >
            <ol
              role="list"
              type="1"
              className="-my-6 divide-y mt-2 divide-gray-200"
            >
              {product.map((cartProd, i) => (
                <li
                  key={cartProd.id}
                  className="relative flex py-4 justify-between"
                >
                  <div className="font-medium text-gray-900">
                    {i + 1}.{cartProd.name}
                  </div>
                  <div className="absolute font-medium text-gray-900 text-center left-1/2">
                    {cartProd.count}
                  </div>
                  <div className="font-medium text-gray-900">
                    {Math.floor(
                      (cartProd.price * cartProd.count * cartProd.discount) /
                        100
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="border-t border-gray-200 px-4 py-2 sm:px-6">
            <div className="flex justify-between text-base font-medium py-2 text-gray-900">
              <p>Subtotal</p>
              <h1>{totalPrice} /- only</h1>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div
              className="mt-3"
            >
              <a className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700">
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
