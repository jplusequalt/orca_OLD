import { createTheme, Theme } from "@mui/material";

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#19242e',
      light: '#848daf',
    },
    background: {
      default: '#161825',
      paper: '#2e3344'
    },
    text: {
      primary: '#fff',
      secondary: '#a1acc0',
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) =>`
        body {
          background-color: ${themeParam.palette.background.default}
        }
      `,
    },
  },
});