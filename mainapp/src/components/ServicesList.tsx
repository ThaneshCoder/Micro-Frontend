import { Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router";

const ServicesList = () => {
  const navigate = useNavigate();
  // const gotoproduct = () => {
  //   navigate("/landingPage/Product");
  // };

  // const gotocart = () => {
  //   navigate("/landingPage/cart");
  // };

   let serviceList = ["Product ", "cart" ,"payment" ,"support"]

   const allServices =(page:any,idx:number)=>{
return(
  <Card
        sx={{
          width: 200,
          padding: 2,
          color: "white",
          backgroundColor: "#588BCE",
        }}
        onClick={()=>{navigate(`/landingPage/${page}`)}}
      >
        <CardContent>service {idx+1}({page})</CardContent>
      </Card>
)
   }
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {serviceList.map((val,idx)=>
    allServices(val ,idx)
      
      )}

    </div>
  );
};
export default ServicesList;
