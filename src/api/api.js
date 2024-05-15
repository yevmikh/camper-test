import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://6642adcb3d66a67b3437f70c.mockapi.io/camper';
const axiosInstance = axios.create({ baseURL });

export const axiosRequest = async (config, { rejectWithValue }) => {
  try {
    const response = await axiosInstance(config);
    console.log('Response:', response.data);
    return response.data;
  } catch (e) {
    return rejectWithValue(e.message);
  }
};

export const fetchCamper = createAsyncThunk(
  'camper/fetchAll',
  async ({ page, limit }, thunkAPI) =>
    axiosRequest(
      { method: 'GET', url: `/camper?page=${page}&limit=${limit}` },
      thunkAPI
    )
);

export default axiosInstance;
