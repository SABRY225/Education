import { createSlice } from '@reduxjs/toolkit';
import { addAnswer, editAnswer, deleteAnswer } from '../actions/answerActions';

const initialState = {
  answers: [],
  loading: false,
  error: null,
};

const answerSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAnswer.pending, (state) => {
        state.loading = true;
      })
      .addCase(addAnswer.fulfilled, (state, action) => {
        state.loading = false;
        state.answers.push(action.payload);
      })
      .addCase(addAnswer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editAnswer.pending, (state) => {
        state.loading = true;
      })
      .addCase(editAnswer.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.answers.findIndex(answer => answer.id === action.payload.id);
        if (index !== -1) {
          state.answers[index] = action.payload;
        }
      })
      .addCase(editAnswer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteAnswer.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAnswer.fulfilled, (state, action) => {
        state.loading = false;
        state.answers = state.answers.filter(answer => answer.id !== action.payload);
      })
      .addCase(deleteAnswer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default answerSlice.reducer;
