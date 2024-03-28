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
    <div className='card'>
      <div style={{ width: "250px", margin: '5px', backgroundColor: 'white' }}>
        <div style={{ height: "80%", margin: "auto" }}>
          <img src={singleProduct.image} alt="" height='100%' width="100%" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '15px', textAlign: 'center' }}>

          <button style={{ width: '25%' }}>-</button>
          <span style={{ width: '50%' }}> 5</span>
          <button style={{ width: '25%' }}>+</button>
        </div>
      </div>
      <div  style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: "space-around" }}>

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
