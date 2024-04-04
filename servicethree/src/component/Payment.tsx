import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const Payment: React.FC<any> = ({userData}) => {
  let allPaymentType = ["gpay ", "phonepay", "netbankingg", "adssfgh"];
  const [totalPrice, setTotalPrice] = useState(0); // sum of the cart

  useEffect(() => {
    const totalPrice = userData.userCartProd.reduce((accumulator:number, currentProduct:any) => {
      return accumulator + (currentProduct.price * currentProduct.count * currentProduct.discount /
        100);
    }, 0);
    setTotalPrice(totalPrice);
  }, [userData]);

  const allInputs = (type: any) => {
    return (
      <div className="p-4">
        <input name="allpayment" type="radio" id="unique" value={type} />
        <label htmlFor="creditCard" className="pl-2">{type}</label>
        <br></br>
      </div>
    );
  };
  return (
    <div className="h-full w-full bg-blue-300">
        <div className="py-5 px-2 bg-blue-600 text-white text-2xl">
          <span className="p-5"> Amount to be Paid : {Math.ceil(totalPrice)}</span>
        </div>
        <div className="border-solid border-4 p-5">
          <h2 className=" py-2 text-2xl">Select your Payment Method :</h2>
          <form>
            {allPaymentType.map((e) => allInputs(e))}
          </form>
          <Button variant="contained" >Procude to pay</Button>
        </div>
    </div>
  );
};

export default Payment;
