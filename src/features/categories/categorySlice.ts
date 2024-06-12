export interface Category {
  id: string;
  name: string;
  description: null | string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
}

export const initialState = {
  categories: [],
};
