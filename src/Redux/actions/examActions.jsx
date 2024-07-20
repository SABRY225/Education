import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

// Action for adding an exam
export const addExam = createAsyncThunk(
  'exams/addExam',
  async (examData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/exams', examData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Action for editing an exam
export const editExam = createAsyncThunk(
  'exams/editExam',
  async ({ examId, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/exams/${examId}`, updatedData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Action for deleting an exam
export const deleteExam = createAsyncThunk(
  'exams/deleteExam',
  async (examId, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/exams/${examId}`);
      return examId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Action for getting exams in a course
export const getExamsInCourse = createAsyncThunk(
  'exams/getExamsInCourse',
  async (courseId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/courses/${courseId}/exams`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Action for getting an exam by its ID
export const getExamById = createAsyncThunk(
  'exams/getExamById',
  async (examId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/exams/${examId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Action for getting an exam result
export const getExamResult = createAsyncThunk(
  'exams/getExamResult',
  async (examId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/exams/${examId}/result`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Action for setting an exam result
export const setExamResult = createAsyncThunk(
  'exams/setExamResult',
  async ({ examId, resultData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/exams/${examId}/result`, resultData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
