import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

// Action for adding a question
export const addQuestion = createAsyncThunk(
  'questions/addQuestion',
  async (questionData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/questions', questionData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Action for editing a question
export const editQuestion = createAsyncThunk(
  'questions/editQuestion',
  async ({ questionId, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/questions/${questionId}`, updatedData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Action for deleting a question
export const deleteQuestion = createAsyncThunk(
  'questions/deleteQuestion',
  async (questionId, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/questions/${questionId}`);
      return questionId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Action for getting questions in an exam
export const getQuestionsInExam = createAsyncThunk(
  'questions/getQuestionsInExam',
  async (examId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/exams/${examId}/questions`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Action for getting a question by its ID
export const getQuestionById = createAsyncThunk(
  'questions/getQuestionById',
  async (questionId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/questions/${questionId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Action for getting the number of questions
export const getNumOfQuestions = createAsyncThunk(
  'questions/getNumOfQuestions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/questions/count');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
