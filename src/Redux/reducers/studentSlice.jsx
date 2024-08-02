import { createSlice } from '@reduxjs/toolkit';
import { getNumStudents } from '../actions/studentActions';

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
      .addCase(getNumStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNumStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.numOfStudents = action.payload;
      })
      .addCase(getNumStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default studentSlice.reducer;
