import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { apiSlice } from "../features/api/apiSlice";
import { categoriesApiSlice } from "../features/categories/categorySlice";
import { castMembersSlice } from "../features/cast/castMembersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    categories: categories,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [categoriesApiSlice.reducerPath]: apiSlice.reducer,
    [castMembersSlice.reducerPath]: apiSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
