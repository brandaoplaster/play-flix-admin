import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import {
  selectCategories,
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from "./categorySlice";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { CategoryTable } from "./components/CategoryTable";
import { GridFilterModel } from "@mui/x-data-grid";

export const CategoryList = () => {
  const categories = useAppSelector(selectCategories);
  const { deleteCategory, deleteCategoryStatus } = useDeleteCategoryMutation();
  const { enqueueSnackbar } = useSnackbar();

  const { search, setSearch } = useState("");
  const { page, setPage } = useState(1);
  const { perPage, setPerPage } = useState(10);
  const { rowsPerPage } = useState([10, 25, 50, 100]);

  const options = { perPage, search, page };

  const { data, isFetching, error } = useGetCategoriesQuery(options);

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

  function handleOnPageChange(page: number) {
    setPage(page + 1);
  }

  function handleOnPageSizeChange(perPage: number) {
    setPerPage(perPage);
  }

  function handleFilterChange(filterModel: GridFilterModel) {
    if (filterModel.quickFilterValues?.length) {
      const search = filterModel.quickFilterValues.join("");
      setSearch(search);
    }
    return setSearch("");
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
