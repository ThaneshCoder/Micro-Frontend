import LoginPage from "./components/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicesList from "./components/ServicesList";
import LandingPage from "./components/Heading";
import { RootStore } from "./redux/Store";
import { useDispatch, useSelector } from "react-redux";
import CardComp from "serviceone/CardComp";
import Summary from "servicetwo/Summary";
import Payment from "servicethree/Payment";
import Support from "servicefour/Support";
import { addToCart, itemDec, itemInc, removeItem } from "./redux/UserSlicer";

function App() {
  let allProd = useSelector((state: RootStore) => state.product.allProducts);
  let singleUser = useSelector((state: RootStore) => state.user.singleUser);

  let dispatch = useDispatch();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {
           singleUser?<>
            <Route path="servicelist" element={<ServicesList />} />
          <Route path="landingPage" element={<LandingPage userData={singleUser}/>}>
            <Route path="Product" element={<CardComp product={allProd} cartdispatch={dispatch} cartAction={addToCart} />} />
            <Route path="cart" element={<Summary
              product={allProd}
              userData={singleUser}
              cartdispatch={dispatch}
              incAction={itemInc}
              decAction={itemDec}
              removeAction={removeItem}
              />}
            />
            <Route path="payment" element={<Payment />} />
            <Route path="support" element={<Support />} />
         
          </Route>
           </>:null
              
          }
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
