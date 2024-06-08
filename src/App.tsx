import { ThemeProvider } from "@mui/system";
import { Box, createTheme } from "@mui/material";
import { Header } from "./components/Header";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box component="main" sx={{ height: "100vh", backgroundColor: "#000" }}>
        <Header />
      </Box>
    </ThemeProvider>
  );
}

export default App;
