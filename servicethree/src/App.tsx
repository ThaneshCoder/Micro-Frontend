import PaymentPage from "./component/Payment"

// import jsonProd from '../../UserData.json'

// interface UserCart{
//   userCartProd:{id:number}[]
// }

function App() {
  // let cart:UserCart={userCartProd:[{id:1},{id:2},{id:3}]}
  return (
    //     <div className="bg-slate-700"  style={{marginTop:'60px',width:'100%'}}>
    //   <PaymentPage userData={jsonProd.UserData[0]}/>
    // </div>
    <div className=" h-screen w-screen">
      <PaymentPage/>
    </div>
  )
}

export default App
