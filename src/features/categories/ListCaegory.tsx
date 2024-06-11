import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const CategoryList = () => {
  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/categories/create"
          style={{ marginBottom: "1rem" }}
        >
          New Category
        </Button>
      </Box>
      <Typography variant="h1" component="h1">
        Category List
      </Typography>
    </Box>
  );
};
