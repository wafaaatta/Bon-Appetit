import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categoryId: '',
  },
  reducers: {
    setcategoryId(state, action) {
      state.categoryId = action.payload;
    },
  },
});

export const { setcategoryId } = categorySlice.actions;
export default categorySlice.reducer;