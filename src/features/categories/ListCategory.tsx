import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import {
  selectCategories,
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from "./categorySlice";
import { useEffect } from "react";
import { useSnackbar } from "notistack";
import { CategoryTable } from "./components/CategoryTable";
import { GridFilterModel } from "@mui/x-data-grid";

export const CategoryList = () => {
  const { data, isFetching, error } = useGetCategoriesQuery();
  const categories = useAppSelector(selectCategories);
  const { deleteCategory, deleteCategoryStatus } = useDeleteCategoryMutation();
  const { enqueueSnackbar } = useSnackbar();

  async function handleDeleteCategory(id: string) {
    await deleteCategory({ id });
  }

  useEffect(() => {
    if (deleteCategoryStatus.isSuccess) {
      enqueueSnackbar(`Category deleted`, { variant: "success" });
    } else {
      enqueueSnackbar(`Category not deleted`, { variant: "error" });
    }
  }, [deleteCategoryStatus, enqueueSnackbar]);

  function handleOnPageChange(page: number) {}

  function handleOnPageSizeChange(perPage: number) {}

  function handleFilterChange(filterModel: GridFilterModel) {}

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

      <CategoryTable
        data={data}
        isFetching={isFetching}
        handleDelete={handleDeleteCategory}
        perPage={10}
        rowsPerPage={[10, 20, 30]}
        handleOnPageChange={handleOnPageChange}
        handleOnPageSizeChange={handleOnPageSizeChange}
        handleFilterChange={handleFilterChange}
      />
    </Box>
  );
};
