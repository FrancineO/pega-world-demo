import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
