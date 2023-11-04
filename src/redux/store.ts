import { configureStore } from '@reduxjs/toolkit';
import booleanReducer from './slices/booleanSlice';

const store = configureStore({
  reducer: {
    boolean: booleanReducer,
  },
});

export default store;
