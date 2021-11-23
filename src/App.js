import React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Box>
      <NavBar />
      <Box sx={{ flexGrow: 1, p: 0 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
export default App;
