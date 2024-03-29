import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Outlet, useNavigate } from 'react-router';

const LandingPage = () => {

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
                navigate("/landingPage/cart");
              }}
            />
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet/>
    </div>
  );
};

export default LandingPage;
