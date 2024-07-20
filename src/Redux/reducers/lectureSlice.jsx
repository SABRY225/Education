import { createSlice } from '@reduxjs/toolkit';
import { addLecture, deleteLecture, editLecture, getLectureById, getLecturesInCourse, getNumOfLectures } from '../actions/lectureActions';

// Initial state
const initialState = {
  lectures: [],
  lectureDetails: null,
  numOfLectures: 0,
  loading: false,
  error: null,
};

// Lecture slice
const lectureSlice = createSlice({
  name: 'lectures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add lecture
      .addCase(addLecture.pending, (state) => {
        state.loading = true;
      })
      .addCase(addLecture.fulfilled, (state, action) => {
        state.loading = false;
        state.lectures.push(action.payload);
      })
      .addCase(addLecture.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Edit lecture
      .addCase(editLecture.pending, (state) => {
        state.loading = true;
      })
      .addCase(editLecture.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.lectures.findIndex((lecture) => lecture.id === action.payload.id);
        if (index !== -1) {
          state.lectures[index] = action.payload;
        }
      })
      .addCase(editLecture.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete lecture
      .addCase(deleteLecture.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteLecture.fulfilled, (state, action) => {
        state.loading = false;
        state.lectures = state.lectures.filter((lecture) => lecture.id !== action.payload);
      })
      .addCase(deleteLecture.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get lectures in course
      .addCase(getLecturesInCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLecturesInCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.lectures = action.payload;
      })
      .addCase(getLecturesInCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get lecture by ID
      .addCase(getLectureById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLectureById.fulfilled, (state, action) => {
        state.loading = false;
        state.lectureDetails = action.payload;
      })
      .addCase(getLectureById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get number of lectures
      .addCase(getNumOfLectures.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNumOfLectures.fulfilled, (state, action) => {
        state.loading = false;
        state.numOfLectures = action.payload;
      })
      .addCase(getNumOfLectures.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default lectureSlice.reducer;
