import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import CardComp from "serviceone/CardComp";

interface Product {
    image: string;
    name: string;
    model: string;
    price: number;
    discount: number;
    category: string;
    total: number;
  }

interface LandingPageProps {
  product: Product[]; // Adjust the type according to your actual data structure
}

const LandingPage: React.FC<LandingPageProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome
            </Typography>
            <ShoppingCartIcon
              onClick={() => {
                navigate("/cart");
              }}
            />
          </Toolbar>
        </AppBar>
      </Box>
      <CardComp productCard={product} />
    </div>
  );
};

export default LandingPage;
