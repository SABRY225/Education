import { createSlice } from '@reduxjs/toolkit';
import { addEvaluation, editEvaluation, deleteEvaluation } from '../actions/evaluationActions';

const initialState = {
  evaluations: [],
  loading: false,
  error: null,
};

const evaluationSlice = createSlice({
  name: 'evaluations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add evaluation
      .addCase(addEvaluation.pending, (state) => {
        state.loading = true;
      })
      .addCase(addEvaluation.fulfilled, (state, action) => {
        state.loading = false;
        state.evaluations.push(action.payload);
      })
      .addCase(addEvaluation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Edit evaluation
      .addCase(editEvaluation.pending, (state) => {
        state.loading = true;
      })
      .addCase(editEvaluation.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.evaluations.findIndex(evaluation => evaluation.id === action.payload.id);
        if (index !== -1) {
          state.evaluations[index] = action.payload;
        }
      })
      .addCase(editEvaluation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete evaluation
      .addCase(deleteEvaluation.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteEvaluation.fulfilled, (state, action) => {
        state.loading = false;
        state.evaluations = state.evaluations.filter(evaluation => evaluation.id !== action.payload);
      })
      .addCase(deleteEvaluation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default evaluationSlice.reducer;
