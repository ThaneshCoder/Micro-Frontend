import { AppBar, Box,Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Outlet, useNavigate } from 'react-router';

const LandingPage = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome
            </Typography>
            <ShoppingCartIcon
              onClick={() => {
                navigate("/landingPage/cart");
              }}
            />
          </Toolbar>
        </AppBar>
      </Box>

      <Outlet />

    </div>
  );
};

export default LandingPage;
