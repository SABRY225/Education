// actions/courseActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance'; // Adjust the path as needed
import {
  addCourse,
  getCourses
} from '../../api/courseApi'; // Adjust the import path as needed

export const Add_Course = createAsyncThunk('Course/', async (courseData) => {
  console.log(courseData);
  const response = await addCourse(courseData);
  return response.data;
});

export const EditCourse = createAsyncThunk('courses/editCourse', async (courseData) => {
  const response = await axiosInstance.put(`/courses/${courseData.id}`, courseData);
  return response.data;
});

export const DeleteCourse = createAsyncThunk('courses/deleteCourse', async (courseId) => {
  await axiosInstance.delete(`/courses/${courseId}`);
  return courseId;
});

export const EnrollCourse = createAsyncThunk('courses/enrollCourse', async (enrollmentData) => {
  const response = await axiosInstance.post('/courses/enroll', enrollmentData);
  return response.data;
});

export const GetCourses = createAsyncThunk('Course/all', async (token) => {
  const response = await getCourses(token);
  console.log(response);
  return response;
});

export const GetCourseById = createAsyncThunk('courses/getCourseById', async (courseId) => {
  const response = await axiosInstance.get(`/courses/${courseId}`);
  return response.data;
});

export const GetCoursesByTeacher = createAsyncThunk('courses/getCoursesByTeacher', async (teacherId) => {
  const response = await axiosInstance.get(`/courses/teacher/${teacherId}`);
  return response.data;
});

export const GetNumOfStudentsInCourse = createAsyncThunk('courses/getNumOfStudentsInCourse', async (courseId) => {
  const response = await axiosInstance.get(`/courses/${courseId}/students/count`);
  return response.data;
});

export const GetNumOfCourses = createAsyncThunk('courses/getNumOfCourses', async () => {
  const response = await axiosInstance.get('/courses/count');
  return response.data;
});
