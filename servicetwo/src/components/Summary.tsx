import { useEffect, useState } from "react";
import CartCard from "./CartCard";
import prod from '../../../AllProduct.json'

const Summary : React.FC = ()=> {

    const [allProduct, setAllProduct] = useState([{}])

    useEffect(() => {
        setAllProduct(prod.AllProduct)
    }, [])
    

    return <div>
        {/* {
            allProduct?allProduct.map((e,i)=>( <CartCard indi={e}/>)) :null
        } */}

    </div>
}

export default Summary;