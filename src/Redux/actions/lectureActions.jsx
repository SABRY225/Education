import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

// Action for adding a lecture
export const addLecture = createAsyncThunk(
  'lectures/addLecture',
  async (lectureData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/lectures', lectureData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Action for editing a lecture
export const editLecture = createAsyncThunk(
  'lectures/editLecture',
  async ({ lectureId, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/lectures/${lectureId}`, updatedData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Action for deleting a lecture
export const deleteLecture = createAsyncThunk(
  'lectures/deleteLecture',
  async (lectureId, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/lectures/${lectureId}`);
      return lectureId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Action for getting lectures in a course
export const getLecturesInCourse = createAsyncThunk(
  'lectures/getLecturesInCourse',
  async (courseId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/courses/${courseId}/lectures`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Action for getting a lecture by its ID
export const getLectureById = createAsyncThunk(
  'lectures/getLectureById',
  async (lectureId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/lectures/${lectureId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Action for getting the number of lectures
export const getNumOfLectures = createAsyncThunk(
  'lectures/getNumOfLectures',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/lectures/count');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
