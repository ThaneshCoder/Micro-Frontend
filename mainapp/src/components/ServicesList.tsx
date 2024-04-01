import { Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router";

const ServicesList = () => {
  const navigate = useNavigate();
  const gotoproduct = () => {
    navigate("/landingPage/Product");
  };

  const gotocart = () => {
    navigate("/landingPage/cart");
  };
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Card
        sx={{
          width: 200,
          padding: 2,
          color: "white",
          backgroundColor: "#588BCE",
        }}
        onClick={gotoproduct}
      >
        <CardContent>service one</CardContent>
      </Card>

      <Card
        sx={{
          width: 200,
          padding: 2,
          color: "white",
          backgroundColor: "#588BCE",
        }}
        onClick={gotocart}
      >
        <CardContent>service Two</CardContent>
      </Card>
    </div>
  );
};
export default ServicesList;
