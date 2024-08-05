import { ThemeProvider } from "@mui/system";
import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { appTheme } from "./config/theme";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { CreateCategory } from "./features/categories/CreateCategory";
import { CategoryList } from "./features/categories/ListCategory";
import { EditCategory } from "./features/categories/EditCategory";
import { SnackbarProvider } from "notistack";
import { ListCastMembers } from "./features/cast/ListCastMember";
import { CreateCastMember } from "./features/cast/CreateCastMembers";
import { EditCastMember } from "./features/cast/EditCastMember";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box component="main" sx={{ height: "100vh", backgroundColor: "#000" }}>
          <Header />

          <Layout>
            <Routes>
              <Route path="/" element={<CategoryList />} />
              <Route path="/categories" element={<CategoryList />} />
              <Route path="/categories/create" element={<CreateCategory />} />
              <Route path="/categories/edit/:id" element={<EditCategory />} />

              <Route path="/" element={<ListCastMembers />} />
              <Route path="/cast-members/create" element={<CreateCastMember />} />
              <Route path="/cast-members/edit/:id" element={<EditCastMember />} />
            </Routes>
          </Layout>
        </Box>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
