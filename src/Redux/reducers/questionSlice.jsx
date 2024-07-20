import { createSlice } from '@reduxjs/toolkit';
import { addQuestion, deleteQuestion, editQuestion, getNumOfQuestions, getQuestionById, getQuestionsInExam } from '../actions/questionActions';


// Initial state
const initialState = {
  questions: [],
  questionDetails: null,
  numOfQuestions: 0,
  loading: false,
  error: null,
};

// Question slice
const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add question
      .addCase(addQuestion.pending, (state) => {
        state.loading = true;
      })
      .addCase(addQuestion.fulfilled, (state, action) => {
        state.loading = false;
        state.questions.push(action.payload);
      })
      .addCase(addQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Edit question
      .addCase(editQuestion.pending, (state) => {
        state.loading = true;
      })
      .addCase(editQuestion.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.questions.findIndex((question) => question.id === action.payload.id);
        if (index !== -1) {
          state.questions[index] = action.payload;
        }
      })
      .addCase(editQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete question
      .addCase(deleteQuestion.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteQuestion.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = state.questions.filter((question) => question.id !== action.payload);
      })
      .addCase(deleteQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get questions in exam
      .addCase(getQuestionsInExam.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuestionsInExam.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
      })
      .addCase(getQuestionsInExam.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get question by ID
      .addCase(getQuestionById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuestionById.fulfilled, (state, action) => {
        state.loading = false;
        state.questionDetails = action.payload;
      })
      .addCase(getQuestionById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get number of questions
      .addCase(getNumOfQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNumOfQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.numOfQuestions = action.payload;
      })
      .addCase(getNumOfQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default questionSlice.reducer;
