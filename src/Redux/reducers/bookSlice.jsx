import { createSlice } from '@reduxjs/toolkit';
import {
  addBook,
  editBook,
  deleteBook,
  getBooksInCourse,
  getBookById,
  getNumOfBooks,
} from '../actions/bookActions';

const initialState = {
  books: [],
  book: null,
  booksInCourse: [],
  numOfBooks: 0,
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books.push(action.payload);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Edit book
      .addCase(editBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(editBook.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.books.findIndex((book) => book.id === action.payload.id);
        if (index !== -1) {
          state.books[index] = action.payload;
        }
      })
      .addCase(editBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Delete book
      .addCase(deleteBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books = state.books.filter((book) => book.id !== action.payload);
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get books in course
      .addCase(getBooksInCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBooksInCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.booksInCourse = action.payload;
      })
      .addCase(getBooksInCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get book by ID
      .addCase(getBookById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBookById.fulfilled, (state, action) => {
        state.loading = false;
        state.book = action.payload;
      })
      .addCase(getBookById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get number of books
      .addCase(getNumOfBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNumOfBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.numOfBooks = action.payload;
      })
      .addCase(getNumOfBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
