import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PaymentIcon from "@mui/icons-material/Payment";
import { Outlet, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/Store";
import Support from "servicefour/Support";

interface userDataProps {
  userData: any;
}

const LandingPage: React.FC<userDataProps> = ({ userData }) => {

  let singleUser = useSelector((state: RootStore) => state.user.singleUser);

  const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome ({userData.username})
            </Typography>
            <div className="ml-auto flex items-center text-white">
              <div
                className="relative right-5 cursor-pointer flow-root lg:ml-16 text-base hover:text-lg"
                onClick={() => {
                  navigate("/landingPage/product");
                }}
              >
                <LocalMallOutlinedIcon />
              </div>
              <div
                className="relative right-5 cursor-pointer ml-10 flow-root"
                onClick={() => {
                  navigate("/landingPage/cart");
                }}
              >
                <div className="absolute ml-6 ">
                  <p className="flex h-2 w-2 items-center justify-center rounded-full bg-white p-3 text-xs text-blue-900">
                    {singleUser.userCartProd.length}
                  </p>
                </div>
                <ShoppingCartIcon />
              </div>
              <div
                className="relative right-5 cursor-pointer ml-8 flow-root lg:ml-16 text-base hover:text-lg"
                onClick={() => {
                  navigate("/landingPage/payment");
                }}
              >
                <PaymentIcon />
              </div>
              <div
                className="relative right-5 cursor-pointer ml-4 flow-root lg:ml-16 text-base hover:text-lg"
                onClick={() => {
                  navigate("/landingPage/support");
                }}
              >
                <SupportAgentIcon />
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Box>

      <div style={{ marginTop: "68px" }}>
        <Support />
        <Outlet />

      </div>
    </div>
  );
};

export default LandingPage;
