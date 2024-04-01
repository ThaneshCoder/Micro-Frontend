import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { useEffect, useState } from "react";

// Defined Product interface with a different name
interface IndiValue {
  id: number;
  name: string;
  model: string;
  price: number;
  discount: number;
  category: string;
  instock: number;
  image: string;
}
[];

interface mainProd {
  product: IndiValue[];
  cartAction: any;
  cartdispatch: any;
}

const CardComp: React.FC<mainProd> = ({
  product,
  cartdispatch,
  cartAction,
}) => {
  const [allProduct, setAllProduct] = useState<IndiValue[]>([]);

  useEffect(() => {
    setAllProduct(product);
  }, [product]); // Run effect whenever product prop changes

  return (
    <>
      <div className="flex flex-wrap justify-evenly">
        {allProduct
          ? allProduct.map((prod) => (
              <Card key={prod.id} sx={{ maxWidth: 250, margin: "15px" }}>
                <CardActionArea>
                  <div className=" p-6 border-b-2" style={{ width: "100%" }}>
                    <img
                      src={prod.image}
                      style={{ height: "150px", width: "200px" }}
                      alt="image"
                    />
                  </div>
                  <div className="flex-col justify-between ">
                    <CardContent>
                      <Typography gutterBottom component="div">
                        {prod.name}
                      </Typography>
                      <Typography gutterBottom component="div">
                        {prod.model}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Price: {prod.price}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle2"
                        component="div"
                      >
                        Discount: {prod.discount}
                      </Typography>
                      <Typography gutterBottom>
                        Category: {prod.category}
                      </Typography>
                      <Typography gutterBottom>
                        Quantity: {prod.instock}
                      </Typography>
                    </CardContent>
                    <CardActions
                      onClick={() => {
                        cartdispatch(cartAction(prod.id));
                      }}
                      style={{ width: "100%" }}
                    >
                      Add to Cart
                    </CardActions>
                  </div>
                </CardActionArea>
              </Card>
            ))
          : null}
      </div>
    </>
  );
};

export default CardComp;
