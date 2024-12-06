import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

export const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

    return (
        <><AppBar position="static">
            <Toolbar>
                {/*Inside the IconButton, we
        can render various icons*/}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleMenuOpen}
                >
                    {/*This is a simple Menu
      Icon wrapped in Icon */}
                    <MenuIcon />
                </IconButton>
                {/* The Typography component applies
         default font weights and sizes */}
                <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
        </Menu>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    Human'O
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>

        </AppBar><Outlet /></>
        
    );
};