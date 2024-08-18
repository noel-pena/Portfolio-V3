import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#333",
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "gray",
        },
      },
    },
  },
});
