/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { colors, textLogo} from "../assets/assest.js";
import { logoutUser } from "../redux/slices/loginSlice.jsx";

function Navbar({ toggleSidebar }) {
  const [navMenuOpen, setNavMenuOpen] = React.useState(null);
  const [userMenuOpen, setUserMenuOpen] = React.useState(null);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setNavMenuOpen(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setUserMenuOpen(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setNavMenuOpen(null);
  };

  const handleCloseUserMenu = () => {
    setUserMenuOpen(null);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/api/user/login");
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: colors.paperbeige,
        height: 100,
        justifyContent: "center",
        // color: colors.white2,
        color: colors.green,
        //borderRadius: "0 0 12px 12px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo Positioned on the Left for Desktop */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <img src={textLogo} alt="logo" style={{ width: "130px" }} />
          </Typography>

          {/* Menu Button for Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={navMenuOpen}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(navMenuOpen)}
              onClose={handleCloseNavMenu}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  component={Link}
                  to="/"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  Home
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  component={Link}
                  to="api/category"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  Category
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  component={Link}
                  to="api/contact-us"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  Contact Us
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Desktop Menu Items */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button
              component={Link}
              to="/"
              sx={{
                color: "inherit",
                borderRadius: "12px",
                "&:hover": {
                  backgroundColor: colors.green,
                  color: colors.paperbeige,
                },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="api/category"
              sx={{
                color: "inherit",
                borderRadius: "12px",
                "&:hover": {
                  backgroundColor: colors.green,
                  color: colors.paperbeige,
                },
              }}
            >
              Category
            </Button>
            <Button
              component={Link}
              to="api/contact-us"
              sx={{
                color: "inherit",
                borderRadius: "12px",
                "&:hover": {
                  backgroundColor: colors.green,
                  color: colors.paperbeige,
                },
              }}
            >
              Contact Us
            </Button>
          </Box>

          {/* User Menu */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isLoggedIn ? (
              <Box
              // sx={{ display: "flex", alignItems: "center" }}
              >
                {role === "ROLE_ADMIN" && (
                  <Button
                    component={Link}
                    to="/api/admin/userlist"
                    sx={{
                      color: "inherit",
                      borderRadius: "12px",
                      margin: "10px",
                      "&:hover": {
                        backgroundColor: colors.green,
                        color: colors.paperbeige,
                      },
                    }}
                  >
                    Admin Page
                  </Button>
                )}
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, marginLeft: 2 }}
                >
                  <AccountCircle
                    sx={{ color: colors.green, fontSize: "28px" }}
                  />
                </IconButton>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={userMenuOpen}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  keepMounted
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  open={Boolean(userMenuOpen)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography
                      component={Link}
                      to={`/api/mypage/${username}/myposts`}
                      sx={{ textDecoration: "none", color: "inherit" }}
                    >
                      My Page
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Typography sx={{ color: colors.warning }}>
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Button
                onClick={() => navigate("/api/user/login")}
                sx={{
                  color: colors.green,
            

                  borderRadius: "12px",
                  paddingX: 2,
                  marginLeft: 2,
                  "&:hover": { backgroundColor: colors.button2, color: colors.page1},
                }}
              >
                로그인
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
