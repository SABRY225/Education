// actions/bookActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance'; // Adjust the path as needed

export const addBook = createAsyncThunk('book/addBook', async (bookData) => {
  const response = await axiosInstance.post('/books', bookData);
  return response.data;
});

export const editBook = createAsyncThunk('book/editBook', async (bookData) => {
  const response = await axiosInstance.put(`/books/${bookData.id}`, bookData);
  return response.data;
});

export const deleteBook = createAsyncThunk('book/deleteBook', async (bookId) => {
  await axiosInstance.delete(`/books/${bookId}`);
  return bookId;
});

export const getBooksInCourse = createAsyncThunk('book/getBooksInCourse', async (courseId) => {
  const response = await axiosInstance.get(`/courses/${courseId}/books`);
  return response.data;
});

export const getBookById = createAsyncThunk('book/getBookById', async (bookId) => {
  const response = await axiosInstance.get(`/books/${bookId}`);
  return response.data;
});

export const getNumOfBooks = createAsyncThunk('book/getNumOfBooks', async () => {
  const response = await axiosInstance.get('/books/number');
  return response.data;
});
