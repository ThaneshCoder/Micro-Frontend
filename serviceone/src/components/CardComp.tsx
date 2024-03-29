import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useEffect, useState } from "react";

// Define Product interface with a different name
interface IndiValue {
  name: string;
  model: string;
  price: number;
  discount: number;
  category: string;
  total: number;
  image: string;
}[]

interface mainProd {
  product: IndiValue[]
}


const CardComp: React.FC<mainProd> = ({ product }) => {
  const [allProduct, setAllProduct] = useState<IndiValue[]>([]);

  useEffect(() => {
    setAllProduct(product);
  }, [product]); // Run effect whenever product prop changes

  return (
    <>
      <div className="flex flex-wrap justify-evenly">
        {allProduct?allProduct.map((prod, index: number) => (
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
                  Price: {prod.price}
                </Typography>
                <Typography gutterBottom variant="subtitle2" component="div">
                  Discount: {prod.discount}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Category: {prod.category}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Quantity: {prod.total}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        )):null}
      </div>
    </>
  );
}

export default CardComp