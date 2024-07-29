import { createSlice } from '@reduxjs/toolkit';
import {
  Add_Course,
  EditCourse,
  DeleteCourse,
  EnrollCourse,
  GetCourses,
  GetCourseById,
  GetCoursesByTeacher,
  GetNumOfStudentsInCourse,
  GetNumOfCourses,
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
      .addCase(Add_Course.pending, (state) => {
        state.loading = true;
      })
      .addCase(Add_Course.fulfilled, (state, action) => {
        state.loading = false;
        state.courses.push(action.payload);
      })
      .addCase(Add_Course.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Edit course
      .addCase(EditCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(EditCourse.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.courses.findIndex((course) => course.id === action.payload.id);
        if (index !== -1) {
          state.courses[index] = action.payload;
        }
      })
      .addCase(EditCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Delete course
      .addCase(DeleteCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(DeleteCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = state.courses.filter((course) => course.id !== action.payload);
      })
      .addCase(DeleteCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Enroll course
      .addCase(EnrollCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(EnrollCourse.fulfilled, (state) => {
        state.loading = false;
        // Handle enrollment response if needed
      })
      .addCase(EnrollCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get courses
      .addCase(GetCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(GetCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get course by ID
      .addCase(GetCourseById.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetCourseById.fulfilled, (state, action) => {
        state.loading = false;
        state.course = action.payload;
      })
      .addCase(GetCourseById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get courses by teacher
      .addCase(GetCoursesByTeacher.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetCoursesByTeacher.fulfilled, (state, action) => {
        state.loading = false;
        state.coursesByTeacher = action.payload;
      })
      .addCase(GetCoursesByTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get number of students in course
      .addCase(GetNumOfStudentsInCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetNumOfStudentsInCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.numOfStudentsInCourse = action.payload;
      })
      .addCase(GetNumOfStudentsInCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get number of courses
      .addCase(GetNumOfCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetNumOfCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.numOfCourses = action.payload;
      })
      .addCase(GetNumOfCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default courseSlice.reducer;
