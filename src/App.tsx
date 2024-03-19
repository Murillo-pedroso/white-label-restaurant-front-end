import Router from "./router";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router></Router>
    </ThemeProvider>
  );
}
