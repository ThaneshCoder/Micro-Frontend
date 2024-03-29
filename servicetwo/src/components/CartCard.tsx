import React from 'react';
import { Button, Typography } from '@mui/material';

// Define the interface for the shape of the 'indi' object
interface IndiValue {
  image: string;
  name: string;
  model: string;
  price: number;
}

// Define the props interface for the CartCard component
interface CartCardProps {
  singleProduct: IndiValue;
}

const CartCard: React.FC<CartCardProps> = ({ singleProduct }) => {
  return (
    <div className='flex m-5 bg-slate-100 flex-wrap lg:justify-start sm:justify-center'>
      <div className='flex-col justify-between h-58 m-1' style={{width:'180px'}}>

        <div className='bg-red-500' style={{width:'100%'}}>
          <img src={singleProduct.image} style={{height:'100%',width:'100%'}} alt=""/>
          {/* <div style={{backgroundImage:`url(${singleProduct.image})`,height:'100%',width:'100%',backgroundSize:'contain'}}></div> */}
        </div>

        <div className='flex justify-evenly m-1' >
          <button className='bg-red-400' style={{width:'30%'}}>-</button>
          <span className='m-auto'>6</span>
          <button className='bg-red-400' style={{width:'30%'}}>+</button>
        </div>

      </div>
      
      <div className='flex-col p-5 justify-around'>

        <Typography component="div" variant="h4">
          {singleProduct.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {singleProduct.model}
        </Typography>
        <Typography variant="h5" color="text" component="div">
          {singleProduct.price} /- Rs only
        </Typography>

        <div>
          <Button variant="text">Save for Later</Button>
          <Button variant="text"> Remove </Button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
