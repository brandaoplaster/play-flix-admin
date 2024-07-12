import { Box, Paper, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { Category, selectCategoryById } from "./categorySlice";
import { useState } from "react";
import { CategoryForm } from "./components/CategoryForm";
import { useParams } from "react-router-dom";

export const EditCategory = () => {
  const id = useParams().id || "";
  const category = useAppSelector((state) => selectCategoryById(state, id));
  const [isdisabled, setIsdisabled] = useState(false);

  const [categoryState, setCategoryState] = useState<Category>({
    id: "",
    name: "",
    description: "",
    is_active: false,
    created_at: "",
    deleted_at: "",
    updated_at: "",
  });

  const handleChange = () => {};
  const handleToggle = () => {};

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
          isdisabled={isdisabled}
          isLoading={false}
          handleSubmit={() => {}}
          handleChange={handleChange}
          handleToggle={handleToggle}
        />
      </Paper>
    </Box>
  );
};
