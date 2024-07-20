import axiosInstance from '../../api/axiosInstance';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addAnswer = createAsyncThunk('answers/addAnswer', async (answerData) => {
  const response = await axiosInstance.post('/answers', answerData);
  return response.data;
});

export const editAnswer = createAsyncThunk('answers/editAnswer', async (answerData) => {
  const response = await axiosInstance.put(`/answers/${answerData.id}`, answerData);
  return response.data;
});

export const deleteAnswer = createAsyncThunk('answers/deleteAnswer', async (answerId) => {
  await axiosInstance.delete(`/answers/${answerId}`);
  return answerId;
});
