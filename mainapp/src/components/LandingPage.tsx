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

const LandingPage: React.FC<userDataProps> = () => {
  let singleUser = useSelector((state: RootStore) => state.user.singleUser);

  const navigate = useNavigate();

  return (
    <div>
      <div className="flex" style={{ backgroundColor: "black" }}>
        <div></div>
        <div className="ml-auto flex items-center text-white">
          <div
            className="right-5 cursor-pointer flow-root lg:ml-16 text-base hover:text-lg"
            onClick={() => {
              navigate("/landingPage/product");
            }}
          >
            All Products
            <LocalMallOutlinedIcon />
          </div>

          <div
            className="flex right-5 cursor-pointer ml-5 "
            onClick={() => {
              navigate("/landingPage/cart");
            }}
          >
            Cart Product
            <ShoppingCartIcon />
            <span className="flex h-2 w-2 items-center justify-center rounded-full bg-white p-3 text-xs text-blue-900">
              {singleUser.userCartProd.length}
            </span>
          </div>

          <div
            className="right-5 cursor-pointer  ml-5 flow-root lg:ml-5 text-base hover:text-lg"
            onClick={() => {
              navigate("/landingPage/payment");
            }}
          >
            Payment Info
            <PaymentIcon />
          </div>
          <div
            className="right-5 cursor-pointer  ml-5 flow-root lg:ml-5 text-base hover:text-lg"
            onClick={() => {
              navigate("/landingPage/support");
            }}
          >
            Help
            <SupportAgentIcon />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "68px" }}>
        <Support userData={singleUser} />
        <Outlet />
      </div>
    </div>
  );
};

export default LandingPage;
