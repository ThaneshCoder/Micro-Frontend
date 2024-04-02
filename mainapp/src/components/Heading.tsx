import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Outlet, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/Store";
import Support from "servicefour/Support";


const LandingPage = () => {
  let cartProd = useSelector((state: RootStore) => state.product.cartProduct);
  const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome
            </Typography>
            <div className="ml-auto flex items-center text-white">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              </div>

              <div
                className="relative right-10 cursor-pointer ml-8 flow-root lg:ml-16 text-base hover:text-lg"
                onClick={() => {
                  navigate("/landingPage/product");
                }}
              >
                <LocalMallOutlinedIcon />
              </div>
              <div
                className="relative right-10 cursor-pointer ml-8 flow-root"
                onClick={() => {
                  navigate("/landingPage/cart");
                }}
              >
                <div className="t-0 absolute left-6">
                  <p className="flex h-2 w-2 items-center justify-center rounded-full bg-white p-3 text-xs text-blue-900">
                    {cartProd.length}
                  </p>
                </div>
                <ShoppingCartIcon />
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Box>

      <div style={{ marginTop: "68px" }}>
      <Support/>
        <Outlet />

      </div>
    </div>
  );
};

export default LandingPage;
