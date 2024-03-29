import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import CardComp from "serviceone/CardComp";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/Store";

const LandingPage= () => {
  let selector = useSelector((state: RootStore) => state.product.allProducts);
import { useSelector } from 'react-redux';
import { RootStore } from "../redux/Store";

const LandingPage = () => {
  let selector = useSelector((state: RootStore) => state.product.allProducts);

  const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome
            </Typography>
            <ShoppingCartIcon
              onClick={() => {
                navigate("/cart");
              }}
            />
          </Toolbar>
        </AppBar>
      </Box>
      <CardComp product={selector} />
    </div>
  );
};

export default LandingPage;
