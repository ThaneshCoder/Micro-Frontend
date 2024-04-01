import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface IndiValue {
    id: number;
    name: string;
    model: string;
    price: number;
    discount: number;
    category: string;
    instock: number;
    image: string;
};
interface CartCardProps {
    singleProduct: IndiValue;
    addCart: any;
    cartDispatch: any;
}
const SingleCard: React.FC<CartCardProps> = ({ singleProduct, addCart, cartDispatch }) => {
    const [toast, setToast] = React.useState({ type: false, count: 0 });

    const handleClick = () => {
        toast.count > 0 ? setToast({ type: true, count: toast.count + 1}) : setToast((prev) => ({ ...prev, count: toast.count + 1 }))
    };

    const handleClose = () => {setToast((prev) => ({ ...prev, type: false }));}

    return (
        <Card key={singleProduct.id} sx={{ maxWidth: 250, margin: "15px", }}>
            <div className=" p-6 border-b-2" style={{ width: "100%" }}>
                <img
                    src={singleProduct.image}
                    style={{ height: "150px", width: "200px" }}
                    alt=""
                />
            </div>
            <div className="flex-col justify-between ">
                <CardContent>
                    <Typography gutterBottom component="div">
                        {singleProduct.name}
                    </Typography>
                    <Typography gutterBottom component="div">
                        {singleProduct.model}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                    >
                        Price: {singleProduct.price}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="subtitle2"
                        component="div"
                    >
                        Discount: {singleProduct.discount}
                    </Typography>
                    <Typography gutterBottom>
                        Category: {singleProduct.category}
                    </Typography>
                    <Typography gutterBottom>
                        Quantity: {singleProduct.instock}
                    </Typography>
                </CardContent>

                <Button onClick={() => {
                    cartDispatch(addCart(singleProduct.id)); 
                    handleClick();
                }} style={{ width: "100%" }
                }> Add to Cart</Button>
                <Snackbar open={toast.type} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    autoHideDuration={2000} onClose={handleClose}>
                    <Alert
                        onClose={handleClose}
                        severity="warning"
                        variant="filled"
                        sx={{ width: '50vw' }}
                    >
                        {singleProduct.name} ({singleProduct.model}) is Already Added
                    </Alert>
                </Snackbar>
            </div>
        </Card>
    )
}

export default SingleCard