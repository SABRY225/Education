import { createSlice } from '@reduxjs/toolkit';
import {
  addCourse,
  editCourse,
  deleteCourse,
  enrollCourse,
  getCourses,
  getCourseById,
  getCoursesByTeacher,
  getNumOfStudentsInCourse,
  getNumOfCourses,
} from '../actions/courseActions';

// Initial state
const initialState = {
  courses: [],
  course: null,
  coursesByTeacher: [],
  numOfStudentsInCourse: 0,
  numOfCourses: 0,
  loading: false,
  error: null,
};

// Course slice
const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add course
      .addCase(addCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courses.push(action.payload);
      })
      .addCase(addCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Edit course
      .addCase(editCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(editCourse.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.courses.findIndex((course) => course.id === action.payload.id);
        if (index !== -1) {
          state.courses[index] = action.payload;
        }
      })
      .addCase(editCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Delete course
      .addCase(deleteCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = state.courses.filter((course) => course.id !== action.payload);
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Enroll course
      .addCase(enrollCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(enrollCourse.fulfilled, (state, action) => {
        state.loading = false;
        // Handle enrollment response if needed
      })
      .addCase(enrollCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get courses
      .addCase(getCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get course by ID
      .addCase(getCourseById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCourseById.fulfilled, (state, action) => {
        state.loading = false;
        state.course = action.payload;
      })
      .addCase(getCourseById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get courses by teacher
      .addCase(getCoursesByTeacher.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCoursesByTeacher.fulfilled, (state, action) => {
        state.loading = false;
        state.coursesByTeacher = action.payload;
      })
      .addCase(getCoursesByTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get number of students in course
      .addCase(getNumOfStudentsInCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNumOfStudentsInCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.numOfStudentsInCourse = action.payload;
      })
      .addCase(getNumOfStudentsInCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get number of courses
      .addCase(getNumOfCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNumOfCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.numOfCourses = action.payload;
      })
      .addCase(getNumOfCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default courseSlice.reducer;
