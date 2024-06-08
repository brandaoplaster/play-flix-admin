import React from "react";
import { ThemeProvider } from "@mui/system";
import { Box } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={{}}>
      <Box
        component="main"
        sx={{ height: "100vh", backgroundColor: "#000" }}
      ></Box>
    </ThemeProvider>
  );
}

export default App;
