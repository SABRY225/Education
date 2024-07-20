import axiosInstance from "./axiosInstance";

// Function to add a book
export const addBook = async (bookData) => {
  try {
    const response = await axiosInstance.post('/books', bookData);
    return response.data;
  } catch (error) {
    console.error("Error adding book:", error);
    throw error;
  }
};

// Function to edit a book
export const editBook = async (bookId, updatedData) => {
  try {
    const response = await axiosInstance.put(`/books/${bookId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error editing book:", error);
    throw error;
  }
};

// Function to delete a book
export const deleteBook = async (bookId) => {
  try {
    const response = await axiosInstance.delete(`/books/${bookId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting book:", error);
    throw error;
  }
};

// Function to get books in a course
export const getBookInCourse = async (courseId) => {
  try {
    const response = await axiosInstance.get(`/courses/${courseId}/books`);
    return response.data;
  } catch (error) {
    console.error("Error fetching books in course:", error);
    throw error;
  }
};

// Function to get a book by its ID
export const getBookById = async (bookId) => {
  try {
    const response = await axiosInstance.get(`/books/${bookId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching book by ID:", error);
    throw error;
  }
};

// Function to get the number of books
export const getNumOfBooks = async () => {
  try {
    const response = await axiosInstance.get('/books/count');
    return response.data;
  } catch (error) {
    console.error("Error fetching number of books:", error);
    throw error;
  }
};
