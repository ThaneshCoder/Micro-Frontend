import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import products from "../../../AllProduct.json";

export default function CardComp() {
  return (
    <div className="flex flex-wrap justify-evenly">
      {products.AllProduct.map((product, index) => (
        <Card key={index} sx={{ maxWidth: 250,margin:'15px'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image={product.image}
              alt="Product_Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {product.model}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                Price : {product.price}
              </Typography>
              <Typography gutterBottom variant="subtitle2" component="div">
                Discount : {product.discount}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Category : {product.category}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Quantity : {product.total}
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
  );
}
