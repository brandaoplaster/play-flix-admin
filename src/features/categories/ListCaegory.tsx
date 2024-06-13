import { Box, Button, Typography } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
} from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

export const CategoryList = () => {
  const categories = useAppSelector(selectCategories);

  const rows: GridRowsProp = categories.map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description,
    isActive: category.is_active,
    createdAt: category.created_at,
  }));

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "IsActive",
      headerName: "Status",
      flex: 1,
      renderCell: renderIsActiveCell,
    },
  ];

  function renderIsActiveCell(row: GridRenderCellParams) {
    return (
      <Typography color={row.value ? "primary" : "secondary"}>
        {row.value ? "Active" : "Inactive"}
      </Typography>
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
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          pagination={true}
          columns={columns}
          filterMode="server"
          paginationMode="server"
          checkboxSelection={false}
          disableColumnFilter={true}
          disableColumnSelector={true}
          disableDensitySelector={true}
          componentsProps={componentProps}
          components={{ Toolbar: GridToolbar }}
        />
      </div>
    </Box>
  );
};
