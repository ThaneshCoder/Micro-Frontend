import { Button } from "@mui/material";

const Payment: React.FC = () => {
  let allPaymentType = ["gpay ", "phonepay", "netbankingg", "adssfgh"];
  const allInputs = (type: any) => {
    return (
      <>
        <input name="allpayment" type="radio" id="unique" value={type} />
        <label htmlFor="creditCard">{type}</label>
        <br></br>
      </>
    );
  };
  return (
    <div className="h-full w-full bg-cyan-600">
      <>
        <div>
          <h1>Total amount should display here</h1>
        </div>
        <div className="border-solid border-4 ">
          <h2>Payment Information</h2>
          <form>
            <div>{allPaymentType.map((e) => allInputs(e))}</div>
          </form>
          <Button variant="contained">Procude to pay</Button>
        </div>
      </>
    </div>
  );
};

export default Payment;
