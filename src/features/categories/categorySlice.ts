import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { apiSlice } from "../api/apiSlice";
import { CategoryParams, Result, Results } from "../../types/Category";

const endpointUrl: string = "/categories";

export interface Category {
  id: string;
  name: string;
  description: null | string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
}

function parseQueryParams(params: CategoryParams) {
  const query = new URLSearchParams();

  if (params.page) {
    query.append("page", params.page.toString());
  }

  if (params.perPage) {
    query.append("per_page", params.perPage.toString());
  }

  if (params.search) {
    query.append("search", params.search);
  }

  if (params.isActive) {
    query.append("is_active", params.isActive.toString());
  }

  return query.toString();
}

function buildQueryParams({ page = 1, perPage = 10, search = "" }) {
  const params = { page, perPage, search, isActive: true };

  return `${endpointUrl}?${parseQueryParams(params)}`;
}

function deleteCategoryMutation(category: Category) {
  return {
    url: `${endpointUrl}/${category.id}`,
    method: "DELETE",
  };
}

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getCategories: query<Results, CategoryParams>({
      query: buildQueryParams(),
      providesTags: ["Categories"],
    }),
    deleteCategory: mutation<Result, { id: string }>({
      query: deleteCategoryMutation,
      invalidatesTags: ["Categories"],
    }),
  }),
});

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
    deleteCategory(state, action) {
      const index = state.findIndex(
        (category) => category.id === action.payload.id
      );
      state.splice(index, 1);
    },
  },
});

export const { createCategory, updateCategory, deleteCategory } =
  categoriesSlice.actions;

export const selectCategories = (state: RootState) => state.categories;
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

export const { useGetCategoriesQuery, useDeleteCategoryMutation } =
  categoriesApiSlice;
