import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { UserAuth } from "../context/UserAuth";

function Navbar() {
  const [name, surname, isLoginUser, setLoginUser] = useContext(UserAuth);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Button color="inherit">
              <Link to="/">Home</Link>
            </Button>
            <Button color="inherit">
              <Link to="/product">Product</Link>
            </Button>
          </Box>

          <Box>
            {!isLoginUser ? (
              <>
                <Button color="inherit">
                  <Link to="/login">Login</Link>
                </Button>
              </>
            ) : (
              <>
                <h3>{isLoginUser.name}</h3>
                <Button color="inherit">
                  <Link
                    to="/"
                    onClick={() => {
                      setLoginUser(false);
                    }}
                  >
                    Log Out{" "}
                  </Link>
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
