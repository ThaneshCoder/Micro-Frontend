import { Route, Routes, useNavigate } from "react-router-dom"; 
import { Suspense, lazy } from "react";
import { RootStore } from "./redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, itemDec, itemInc, removeItem } from "./redux/UserSlicer";
import LoginComp from "./components/LoginComp";
import LandingPage from "./components/LandingPage";
import ServicesList from "./components/ServicesList";
import LazyLoading from "./components/LazyLoading";
let CardComp = lazy(() => import("serviceone/CardComp"))
let Summary = lazy(() => import("servicetwo/Summary"))
let Payment = lazy(() => import("servicethree/Payment"))
let Support = lazy(() => import("servicefour/Support"))


function App() {
  let allProd = useSelector((state: RootStore) => state.product.allProducts);
  let singleUser = useSelector((state: RootStore) => state.user.singleUser);

  let dispatch = useDispatch();

  let navigator = useNavigate()

  return (
    <Suspense fallback={<LazyLoading/>}>
      <Routes>
        <Route path="/" element={<LoginComp />} />
        {
          singleUser ? <>
            <Route path="servicelist" element={<ServicesList />} />
            <Route path="landingPage" element={<LandingPage userData={singleUser} />}>
              <Route path="Product" element={<CardComp product={allProd} cartdispatch={dispatch} cartAction={addToCart} />} />
              <Route path="cart" element={<Summary
                product={allProd}
                userData={singleUser}
                cartdispatch={dispatch}
                incAction={itemInc}
                decAction={itemDec}
                removeAction={removeItem}
                navi={navigator}
              />}
              />
              <Route path="payment" element={<Payment userData={singleUser} />} />
              <Route path="support" element={<Support userData={singleUser} />} />

            </Route>
          </> : null
        }

      </Routes>
    </Suspense>
  );
}

export default App;
