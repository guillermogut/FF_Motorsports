import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice.js';

export default configureStore({
  reducer: {
    ui: uiReducer,
  },
});
