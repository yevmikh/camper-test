import { createSlice } from '@reduxjs/toolkit';
import { fetchCamper } from '../api/api';

const initialState = {
  campers: [],
  filters: {
    location: '',
    details: [],
    form: '',
    transmission: '',
  },
  isLoading: false,
  error: null,
  page: 1,
};

const camperSlice = createSlice({
  name: 'camper',
  initialState,
  reducers: {
    resetPage(state) {
      state.page = 1;
    },
    incrementPage(state) {
      state.page += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCamper.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.page === 1) {
          state.campers = action.payload;
        } else {
          state.campers = [...state.campers, ...action.payload];
        }
      })
      .addCase(fetchCamper.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetPage, incrementPage } = camperSlice.actions;
export default camperSlice.reducer;
