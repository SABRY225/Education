import { createSlice } from '@reduxjs/toolkit';
import { addExam, deleteExam, editExam, getExamById, getExamResult, getExamsInCourse, setExamResult } from '../actions/examActions';

// Initial state
const initialState = {
  exams: [],
  examDetails: null,
  examResults: {},
  loading: false,
  error: null,
};

// Exam slice
const examSlice = createSlice({
  name: 'exams',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add exam
      .addCase(addExam.pending, (state) => {
        state.loading = true;
      })
      .addCase(addExam.fulfilled, (state, action) => {
        state.loading = false;
        state.exams.push(action.payload);
      })
      .addCase(addExam.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Edit exam
      .addCase(editExam.pending, (state) => {
        state.loading = true;
      })
      .addCase(editExam.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.exams.findIndex((exam) => exam.id === action.payload.id);
        if (index !== -1) {
          state.exams[index] = action.payload;
        }
      })
      .addCase(editExam.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete exam
      .addCase(deleteExam.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteExam.fulfilled, (state, action) => {
        state.loading = false;
        state.exams = state.exams.filter((exam) => exam.id !== action.payload);
      })
      .addCase(deleteExam.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get exams in course
      .addCase(getExamsInCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(getExamsInCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.exams = action.payload;
      })
      .addCase(getExamsInCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get exam by ID
      .addCase(getExamById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getExamById.fulfilled, (state, action) => {
        state.loading = false;
        state.examDetails = action.payload;
      })
      .addCase(getExamById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get exam result
      .addCase(getExamResult.pending, (state) => {
        state.loading = true;
      })
      .addCase(getExamResult.fulfilled, (state, action) => {
        state.loading = false;
        state.examResults[action.meta.arg] = action.payload;
      })
      .addCase(getExamResult.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Set exam result
      .addCase(setExamResult.pending, (state) => {
        state.loading = true;
      })
      .addCase(setExamResult.fulfilled, (state, action) => {
        state.loading = false;
        state.examResults[action.meta.arg.examId] = action.payload;
      })
      .addCase(setExamResult.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default examSlice.reducer;
