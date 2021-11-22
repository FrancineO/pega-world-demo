import { createTheme, responsiveFontSizes } from "@mui/material/styles";
// A custom theme for this app
let theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#001f5f",
    },
    secondary: {
      main: "#0076D1",
    },
    warning: {
      main: "#ffc836",
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
