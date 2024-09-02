import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slice/SearchSlice';
import categoryReducer from './slice/CategorySlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    category: categoryReducer
  },
});

export default store;