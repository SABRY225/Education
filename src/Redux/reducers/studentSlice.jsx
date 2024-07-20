import { createSlice } from '@reduxjs/toolkit';
import { getNumOfStudents } from '../actions/studentActions';

// Initial state
const initialState = {
  numOfStudents: 0,
  loading: false,
  error: null,
};

// Student slice
const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get number of students
      .addCase(getNumOfStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNumOfStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.numOfStudents = action.payload;
      })
      .addCase(getNumOfStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default studentSlice.reducer;
