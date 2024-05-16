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
};

const camperSlice = createSlice({
  name: 'camper',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCamper.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.isLoading = false;
        state.campers = action.payload;
      })
      .addCase(fetchCamper.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default camperSlice.reducer;
