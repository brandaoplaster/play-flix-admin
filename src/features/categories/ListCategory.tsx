import { Box, Button, IconButton, Typography } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
  GridToolbar,
} from "@mui/x-data-grid";
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

  const componentProps = {
    toolbar: {
      showQuickFilter: true,
      quickFilterProps: { debounceMs: 500 },
    },
  };

  const rows: GridRowsProp = data
    ? data.data.map((category) => ({
        id: category.id,
        name: category.name,
        description: category.description,
        isActive: category.is_active,
        createdAt: category.created_at,
      }))
    : [];

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: renderNameCell,
    },
    {
      field: "IsActive",
      headerName: "Status",
      flex: 1,
      renderCell: renderIsActiveCell,
    },
  ];

  function handleDeleteCategory(id: string) {
    dispatch(deleteCategory(id));
  }

  function renderIsActiveCell(row: GridRenderCellParams) {
    return (
      <Typography color={row.value ? "primary" : "secondary"}>
        {row.value ? "Active" : "Inactive"}
      </Typography>
    );
  }

  function renderNameCell(rowData: GridRenderCellParams) {
    return (
      <Link
        style={{ textDecoration: "none" }}
        to={`/categories/edit${rowData.id}`}
      >
        <Typography color="primary">{rowData.value}</Typography>
      </Link>
    );
  }

  function renderActionsCell(params: GridRenderCellParams) {
    return (
      <IconButton
        color="secondary"
        onClick={handleDeleteCategory(params.value)}
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    );
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
        <DataGrid
          rows={rows}
          columns={columns}
          disableColumnFilter={true}
          disableColumnSelector={true}
          disableDensitySelector={true}
          disableSelectionOnClick={true}
          componentsProps={componentProps}
          components={{ Toolbar: GridToolbar }}
          rowsPerPageOptions={[2, 20, 50, 100]}
        />
      </Box>
    </Box>
  );
};
