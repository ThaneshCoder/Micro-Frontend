import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

interface Product {
  image: string;
  name: string;
  model: string;
  price: number;
  discount: number;
  category: string;
  total: number;
}

interface CardCompProps {
  productCard: Product[];
}

const CardComp: React.FC<CardCompProps> = ({ productCard }) => {
  
  return (
    <>
      <div className="flex flex-wrap justify-evenly">
        {productCard.map((prod, index: number) => (
          <Card key={index} sx={{ maxWidth: 250, margin: "15px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image={prod.image}
                alt="Product_Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {prod.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {prod.model}
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Price : {prod.price}
                </Typography>
                <Typography gutterBottom variant="subtitle2" component="div">
                  Discount : {prod.discount}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Category : {prod.category}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Quantity : {prod.total}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CardComp;
