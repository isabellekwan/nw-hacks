import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Face2Icon from '@mui/icons-material/Face2';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <AppBar
      position="sticky"
      style={{
        top: 0,
        backgroundColor: "#004f2d",
        width: "100%", // Set the width to 100%
        left: 0,
        right: 0,
      }}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Face2Icon style={{ marginRight: "15px", fontSize: "2rem" }} />
          <Typography variant="h4" component="div">
            M.U.M.
          </Typography>
        </div>

        {/* Right side: Menu icon */}
        <MenuIcon style={{ fontSize: "2rem" }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;