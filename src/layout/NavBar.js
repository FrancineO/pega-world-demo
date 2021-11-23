import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

function NavBar() {
  return (
    <AppBar position="sticky" sx={{}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "flex", sm: "none", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          onClick={() => window.location.replace("/")}
          sx={{
            display: "flex",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              width: 100,
              filter: "grayscale(100%) invert(100%) brightness(150%)",
              display: "flex",
            }}
          >
            <img
              src="https://www.pega.com/themes/custom/pegawww_theme/images/pega-logo.svg"
              alt="Pega logo"
            />
          </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            World
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" }, gap: 4 }}>
          <Link to="">
            <Typography variant="button" sx={{ color: "primary.contrastText" }}>
              Program
            </Typography>
          </Link>
          <Typography variant="button" sx={{ color: "primary.contrastText" }}>
            Speakers
          </Typography>
          <Typography variant="button" sx={{ color: "primary.contrastText" }}>
            Replays
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;