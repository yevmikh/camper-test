import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://6642adcb3d66a67b3437f70c.mockapi.io/camper';
const axiosInstance = axios.create({ baseURL });

export const axiosRequest = async (config, { rejectWithValue }) => {
  try {
    const response = await axiosInstance(config);

    return response.data;
  } catch (e) {
    if (e.response && e.response.status === 404) {
      return [];
    }
    console.error('Error:', e.message);
    return rejectWithValue(e.message);
  }
};

export const fetchCamper = createAsyncThunk(
  'camper/fetchAll',
  async ({ page, limit, filters }, thunkAPI) => {
    const { location, details, form, transmission } = filters;
    let queryString = new URLSearchParams({ page, limit });

    if (location) queryString.append('location', location);
    if (form) queryString.append('form', form);
    details.forEach(detail => {
      if (detail !== 'automatic') {
        queryString.append(detail, 1);
      }
    });

    if (transmission) {
      queryString.append('transmission', transmission);
    }

    const url = `/camper?${queryString.toString()}`;

    try {
      const response = await axiosRequest({ method: 'GET', url }, thunkAPI);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue('No results found.');
    }
  }
);

export default axiosInstance;
