import { Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router";

export const ServicesList = () => {
  const navigate = useNavigate();
  const gotodemo = () => {
    navigate("/demo");
  };

  return (
    <div onClick={gotodemo}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>service one</CardContent>
      </Card>
    </div>
  );
};
