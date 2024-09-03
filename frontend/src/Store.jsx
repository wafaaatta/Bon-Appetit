import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slice/SearchSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

const persistor = persistStore(store);

export {persistor, store}