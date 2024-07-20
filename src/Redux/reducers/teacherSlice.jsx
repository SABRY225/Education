import { createSlice } from '@reduxjs/toolkit';
import { addImgTeacher, deleteImgTeacher, getNumOfTeachers } from '../actions/teacherActions';

// Initial state
const initialState = {
  numOfTeachers: 0,
  loading: false,
  error: null,
  images: [], // To store image data if needed
};

// Teacher slice
const teacherSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add image
      .addCase(addImgTeacher.pending, (state) => {
        state.loading = true;
      })
      .addCase(addImgTeacher.fulfilled, (state, action) => {
        state.loading = false;
        state.images.push(action.payload); // Assuming image data is pushed into an array
      })
      .addCase(addImgTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete image
      .addCase(deleteImgTeacher.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteImgTeacher.fulfilled, (state, action) => {
        state.loading = false;
        state.images = state.images.filter((image) => image.id !== action.payload); // Remove deleted image
      })
      .addCase(deleteImgTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get number of teachers
      .addCase(getNumOfTeachers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNumOfTeachers.fulfilled, (state, action) => {
        state.loading = false;
        state.numOfTeachers = action.payload;
      })
      .addCase(getNumOfTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default teacherSlice.reducer;
