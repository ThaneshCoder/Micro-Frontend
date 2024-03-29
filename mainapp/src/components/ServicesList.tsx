import { Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router";

export const ServicesList = () => {
  const navigate = useNavigate();
  const gotoproduct = () => {
    navigate("/landingPage/Product");
  };

  const gotocart = () => {
    navigate("/landingPage/cart");
  };
  return (
    <div>
      <Card sx={{ minWidth: 275 }} onClick={gotoproduct}>
        <CardContent>service one</CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }} onClick={gotocart}>
        <CardContent>service Two</CardContent>
      </Card>
    </div>
  );
};
