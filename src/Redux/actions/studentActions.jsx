import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

// Action for getting the number of students
export const getNumOfStudents = createAsyncThunk(
  'students/getNumOfStudents',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/students/count');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
