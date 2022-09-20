import { createTheme, Theme } from "@mui/material";

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#19242e',
      light: '#848daf',
    },
    background: {
      default: '#10151d',
      paper: '#19242e'
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