import { Outlet, Link } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Layout = () => {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //   <Toolbar>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="menu"
    //         sx={{ mr: 2 }}
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //       <Link to="/">
    //         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //           News
    //         </Typography>
    //       </Link>
    //       <Link to="/apply">
    //         <Button color="inherit">Login</Button>
    //       </Link>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
    <div style={{ margin: "0px", padding: "0px" }}>
      <Outlet style={{ margin: 0, padding: 10 }} />
    </div>
  );
};

export default Layout;
