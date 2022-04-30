import { createTheme, colors } from "@mui/material";
import { COLORS } from "./constants/Colors";

export const theme = createTheme({
  status: {
    danger: colors.deepOrange[700],
  },
  palette: {
    primary: {
      main: colors.teal[500],
      dark: colors.teal[900],
      light: colors.teal[100],
      contrastText: COLORS.black,
    },
    secondary: {
      main: colors.deepOrange[500],
      dark: colors.deepOrange[900],
      light: colors.deepOrange[100],
      contrastText: COLORS.black,
    },
  },
});
