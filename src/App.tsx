import { ThemeProvider } from "@mui/system";
import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { appTheme } from "./config/theme";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box component="main" sx={{ height: "100vh", backgroundColor: "#000" }}>
        <Header />
      </Box>
    </ThemeProvider>
  );
}

export default App;
