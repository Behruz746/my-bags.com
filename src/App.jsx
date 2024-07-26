import React from "react";
import theme from "./styles/theme";
import { Button, Container, ThemeProvider } from "@mui/material";
import useGetTitle from "./hook/GetTitle";
import Appbar from "./components/appbar";

function App() {
  useGetTitle("React Material UI - Home");

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "#ffffff",
        }}
      >
        <Appbar />
        <Button variant="contained">Test</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
