import { Box, Paper, Typography } from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import { Category, updateCategory, useGetCategoryQuery } from "./categorySlice";
import { useEffect, useState } from "react";
import { CategoryForm } from "./components/CategoryForm";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

export const EditCategory = () => {
  const id = useParams().id || "";
  const { data: category, isFetching } = useGetCategoryQuery({ id });
  const [categoryState, setCategoryState] = useState<Category>({
    id: "",
    name: "",
    description: "",
    is_active: false,
    created_at: "",
    deleted_at: "",
    updated_at: "",
  });

  const [isdisabled, setIsdisabled] = useState(false);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategoryState({ ...categoryState, [name]: value });
  };

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCategoryState({ ...categoryState, [name]: checked });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(updateCategory(categoryState));
    enqueueSnackbar("Category updated successfully", { variant: "success" });
  }

  useEffect(() => {
    if (category) {
      setCategoryState(category.data);
    }
  }, [category]);

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit Category</Typography>
          </Box>
        </Box>

        <CategoryForm
          category={categoryState}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleToggle={handleToggle}
          isdisabled={isdisabled}
          isLoading={false}
        />
      </Paper>
    </Box>
  );
};
