import { Box, Paper, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Category, selectCategoryById, updateCategory } from "./categorySlice";
import { useState } from "react";
import { CategoryForm } from "./components/CategoryForm";
import { useParams } from "react-router-dom";

export const EditCategory = () => {
  const id = useParams().id || "";
  const category = useAppSelector((state) => selectCategoryById(state, id));
  const [isdisabled, setIsdisabled] = useState(false);
  const [categoryState, setCategoryState] = useState<Category>(category);
  const dispatch = useAppDispatch();

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
  }

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
