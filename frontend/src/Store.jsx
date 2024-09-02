import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slice/SearchSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default store;