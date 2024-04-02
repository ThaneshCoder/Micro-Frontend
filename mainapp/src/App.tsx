import LoginPage from "./components/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicesList from "./components/ServicesList";
import LandingPage from "./components/Heading";
import { RootStore } from "./redux/Store";
import { useDispatch, useSelector } from "react-redux";
import CardComp from "serviceone/CardComp";
import Summary from "servicetwo/Summary";
import Payment from "servicethree/Payment";
import { cartItem, itemDec, itemInc, removeItem } from "./redux/ProductSlicer";

function App() {
  let allProd = useSelector((state: RootStore) => state.product.allProducts);
  let cartProd = useSelector((state: RootStore) => state.product.cartProduct);

  let dispatch = useDispatch();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="servicelist" element={<ServicesList />} />
          <Route path="landingPage" element={<LandingPage />}>
            <Route
              path="Product"
              element={
                <CardComp
                  product={allProd}
                  cartdispatch={dispatch}
                  cartAction={cartItem}
                />
              }
            />
            <Route
              path="cart"
              element={
                <Summary
                  product={cartProd}
                  cartdispatch={dispatch}
                  incAction={itemInc}
                  decAction={itemDec}
                  removeAction={removeItem}
                />
              }
            />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
