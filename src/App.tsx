import { ThemeProvider } from "@mui/system";
import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { appTheme } from "./config/theme";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { CreateCategory } from "./features/categories/CreateCategory";
import { CategoryList } from "./features/categories/ListCaegory";
import { EditCategory } from "./features/categories/EditCategory";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box component="main" sx={{ height: "100vh", backgroundColor: "#000" }}>
        <Header />

        <Layout>
          <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/categories/create" element={<CreateCategory />} />
            <Route path="/categories/edit/:id" element={<EditCategory />} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
