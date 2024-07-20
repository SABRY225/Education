// actions/courseActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance'; // Adjust the path as needed

export const addCourse = createAsyncThunk('courses/addCourse', async (courseData) => {
  const response = await axiosInstance.post('/courses', courseData);
  return response.data;
});

export const editCourse = createAsyncThunk('courses/editCourse', async (courseData) => {
  const response = await axiosInstance.put(`/courses/${courseData.id}`, courseData);
  return response.data;
});

export const deleteCourse = createAsyncThunk('courses/deleteCourse', async (courseId) => {
  await axiosInstance.delete(`/courses/${courseId}`);
  return courseId;
});

export const enrollCourse = createAsyncThunk('courses/enrollCourse', async (enrollmentData) => {
  const response = await axiosInstance.post('/courses/enroll', enrollmentData);
  return response.data;
});

export const getCourses = createAsyncThunk('courses/getCourses', async () => {
  const response = await axiosInstance.get('/courses');
  return response.data;
});

export const getCourseById = createAsyncThunk('courses/getCourseById', async (courseId) => {
  const response = await axiosInstance.get(`/courses/${courseId}`);
  return response.data;
});

export const getCoursesByTeacher = createAsyncThunk('courses/getCoursesByTeacher', async (teacherId) => {
  const response = await axiosInstance.get(`/courses/teacher/${teacherId}`);
  return response.data;
});

export const getNumOfStudentsInCourse = createAsyncThunk('courses/getNumOfStudentsInCourse', async (courseId) => {
  const response = await axiosInstance.get(`/courses/${courseId}/students/count`);
  return response.data;
});

export const getNumOfCourses = createAsyncThunk('courses/getNumOfCourses', async () => {
  const response = await axiosInstance.get('/courses/count');
  return response.data;
});
