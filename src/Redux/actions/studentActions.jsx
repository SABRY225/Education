import { createAsyncThunk } from '@reduxjs/toolkit';
import { getNumOfStudents } from '../../api/studentApi';

// Action for getting the number of students

export const getNumStudents = createAsyncThunk('Student/count', async (token) => {
  const response = await getNumOfStudents(token);
  return response.data;
});

