import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Avatar,
  Button,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Home", "Movies", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar({ onNextStep }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNextStep = () => {
    onNextStep();
    handleCloseNavMenu();
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage:
          "linear-gradient(103.24deg, rgba(0, 3, 8, 0.9) 23.83%, rgba(0, 5, 18, 0.6) 96.1%),url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg')",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            alt="Remy Sharp"
            src="https://www.clipartmax.com/png/middle/70-704701_cinema-icon-movie-camera.png"
            sx={{ margin: "10px" }}
          />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              marginRight: 2,
              marginLeft: 3,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            ScreenSizzle
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="white"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={page === "Movies" ? handleNextStep : handleCloseNavMenu}
                >
                  {page}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                color="inherit"
                onClick={page === "Movies" ? handleNextStep : null}
                sx={{ marginLeft: 1 }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Tooltip title="Account settings">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenUserMenu}
                color="inherit"
              >
                <Avatar
                  alt="User Avatar"
                  src="data:image/jpeg;base64,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"
                />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {setting}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
