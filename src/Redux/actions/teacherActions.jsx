import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';
import { getNumOfTeachers } from '../../api/teacherApi';

// Action for adding an image for a teacher
export const addImgTeacher = createAsyncThunk(
  'teachers/addImgTeacher',
  async ({ teacherId, imageData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/teachers/${teacherId}/image`, imageData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Action for deleting an image for a teacher
export const deleteImgTeacher = createAsyncThunk(
  'teachers/deleteImgTeacher',
  async ({ teacherId, imageId }, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/teachers/${teacherId}/image/${imageId}`);
      return imageId;  // Return the imageId to use in reducers
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Action for getting the number of teachers
export const getNumTeachers = createAsyncThunk('Teacher/count', async (token) => {
  const response = await getNumOfTeachers(token);
  return response.data;
});

