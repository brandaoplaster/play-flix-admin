import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Category {
  id: string;
  name: string;
  description: null | string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
}

const category: Category = {
  id: "0ce78ddd-4192-4ee2-a23b-a01452b96b01",
  name: "Ruby",
  description: "Category programmer",
  is_active: true,
  created_at: "2024-07-10T10:59:00",
  updated_at: "2024-07-10T10:59:00",
  deleted_at: null,
};

export const initialState = [
  category,
  { ...category, id: "1ce78ddd-4192-4ee2-a23b-a01452b96b01", name: "Elixir" },
  { ...category, id: "2ce78ddd-4192-4ee2-a23b-a01452b96b01", name: "Rust" },
  { ...category, id: "3ce78ddd-4192-4ee2-a23b-a01452b96b01", name: "Go" },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    createCategory(state, action) {
      state.push(action.payload);
    },
    updateCategory(state, action) {
      const index = state.findIndex(
        (category) => category.id === action.payload.id
      );
      state[index] = action.payload;
    },
    deleteCategory(state, action) {},
  },
});

export const { createCategory, updateCategory, deleteCategory } =
  categoriesSlice.actions;

export const selectCategory = (state: RootState) => state.categories;
export const selectCategoryById = (state: RootState, id: string) => {
  const category = state.categories.find((category) => category.id === id);

  return (
    category || {
      id: "",
      name: "",
      description: "",
      is_active: false,
      created_at: "",
      updated_at: "",
      deleted_at: "",
    }
  );
};

export default categoriesSlice.reducer;
