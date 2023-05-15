import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: [],
};

export const categoriesSlice = createSlice({
  name: 'CategoriesPage',
  initialState,
  reducers: {
    checkStatus: () => 'Under Construction',
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
