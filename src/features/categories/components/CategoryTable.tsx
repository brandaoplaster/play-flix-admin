import {
  GridColDef,
  GridFilterModel,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { Results } from "../../../types/Category";
import { Link } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  data: Results | undefined;
  perPage: number;
  isFetching: boolean;
  rowsPerPage?: number;

  handleOnPageChange: (page: number) => void;
  handleFilterChange: (filterModel: GridFilterModel) => void;
  handleOnPageSizeChange: (perPage: number) => void;
  handleDelete: (id: number) => void;
};

export function CategoryTable({
  data,
  perPage,
  isFetching,
  rowsPerPage,
  handleOnPageChange,
  handleFilterChange,
  handleOnPageSizeChange,
  handleDelete,
}: Props) {
  const componentProps = {
    toolbar: {
      showQuickFilter: true,
      quickFilterProps: { debounceMs: 500 },
    },
  };

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
    {
      field: "CreatedAt",
      headerName: "Created At",
      flex: 1,
    },
    {
      field: "Id",
      headerName: "Actions",
      type: "string",
      flex: 1,
      renderCell: renderActionsCell,
    },
  ];

  const rows: GridRowsProp = data
    ? data.data.map((category) => ({
        id: category.id,
        name: category.name,
        description: category.description,
        isActive: category.is_active,
        createdAt: category.created_at,
      }))
    : [];

  function mapDataToGridRows(data: Results) {
    const { data: categories } = data;
    return categories.map((category) => ({
      id: category.id,
      name: category.name,
      isActive: category.is_active,
      created_at: new Date(category.created_at).toLocaleDateString("pt-BR"),
    }));
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

  function renderIsActiveCell(row: GridRenderCellParams) {
    return (
      <Typography color={row.value ? "primary" : "secondary"}>
        {row.value ? "Active" : "Inactive"}
      </Typography>
    );
  }

  function renderActionsCell(params: GridRenderCellParams) {
    return (
      <IconButton
        color="secondary"
        onClick={() => handleDelete(params.value)}
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    );
  }

  const rows = data ? mapDataToGridRows(data) : [];
  const rowCount = data?.meta.total || 0;

  return;
}
