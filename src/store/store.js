import { configureStore } from '@reduxjs/toolkit';
import camperReducer from './camperSlice';

export const store = configureStore({
  reducer: {
    camper: camperReducer,
  },
});
