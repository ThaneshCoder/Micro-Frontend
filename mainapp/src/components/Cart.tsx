import { useSelector } from 'react-redux';
import Summary from 'servicetwo/Summary';
import { RootStore } from '../redux/Store';
import { useEffect, useState } from 'react';

function Cart() {
    let selector = useSelector((state: RootStore) => state.product.allProducts);
    const [first, setfirst] = useState(selector)
    useEffect(() => {
      
    }, [])
    
    return (
    <div>
        <Summary prod={first}/>
    </div>
  )
}

export default Cart