import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#BE37E4",
    },
    secondary: {
      main: "#8E257D",
    },
  },
  typography: {
    fontFamily: "Andale Mono, monospace"
  }
});

theme = responsiveFontSizes(theme);

export default theme;
