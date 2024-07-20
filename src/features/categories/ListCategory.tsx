import { Box, Button, IconButton, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  deleteCategory,
  selectCategories,
  useGetCategoriesQuery,
} from "./categorySlice";

export const CategoryList = () => {
  const { data, isFetching, error } = useGetCategoriesQuery();
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();

  function handleDeleteCategory(id: string) {
    dispatch(deleteCategory(id));
  }

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
      <Box sx={{ display: "flex", height: 600 }}>
        {/* <DataGrid
          rows={rows}
          columns={columns}
          disableColumnFilter={true}
          disableColumnSelector={true}
          disableDensitySelector={true}
          disableSelectionOnClick={true}
          componentsProps={componentProps}
          components={{ Toolbar: GridToolbar }}
          rowsPerPageOptions={[2, 20, 50, 100]}
        /> */}
      </Box>
    </Box>
  );
};
