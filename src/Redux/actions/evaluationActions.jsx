import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

// Action for adding an evaluation
export const addEvaluation = createAsyncThunk(
  'evaluations/addEvaluation',
  async (evaluationData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/evaluations', evaluationData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Action for editing an evaluation
export const editEvaluation = createAsyncThunk(
  'evaluations/editEvaluation',
  async ({ evaluationId, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/evaluations/${evaluationId}`, updatedData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Action for deleting an evaluation
export const deleteEvaluation = createAsyncThunk(
  'evaluations/deleteEvaluation',
  async (evaluationId, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/evaluations/${evaluationId}`);
      return evaluationId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
