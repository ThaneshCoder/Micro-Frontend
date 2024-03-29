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
    <div className='flex m-2 bg-slate-300 flex-wrap lg:justify-start md:justify-evenly sm:justify-center hover:bg-slate-200 border-2 border-black' >
      <div className='flex-col justify-between p-5 bg-white'>

        <div className='bg-red-500' style={{width:'100%'}}>
          <img src={singleProduct.image} style={{height:'150px',width:'150px'}} alt=""/>
        </div>

        <div className='flex justify-evenly mt-4 ' >
          <button className='bg-red-400' style={{width:'30%',height:'100%'}}>-</button>
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
