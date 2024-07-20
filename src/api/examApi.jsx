import axiosInstance from "./axiosInstance";

// Function to add an exam
export const addExam = async (examData) => {
  try {
    const response = await axiosInstance.post('/exams', examData);
    return response.data;
  } catch (error) {
    console.error("Error adding exam:", error);
    throw error;
  }
};

// Function to edit an exam
export const editExam = async (examId, updatedData) => {
  try {
    const response = await axiosInstance.put(`/exams/${examId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error editing exam:", error);
    throw error;
  }
};

// Function to delete an exam
export const deleteExam = async (examId) => {
  try {
    const response = await axiosInstance.delete(`/exams/${examId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting exam:", error);
    throw error;
  }
};

// Function to get exams in a course
export const getExamsInCourse = async (courseId) => {
  try {
    const response = await axiosInstance.get(`/courses/${courseId}/exams`);
    return response.data;
  } catch (error) {
    console.error("Error fetching exams in course:", error);
    throw error;
  }
};

// Function to get an exam by its ID
export const getExamById = async (examId) => {
  try {
    const response = await axiosInstance.get(`/exams/${examId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching exam by ID:", error);
    throw error;
  }
};

// Function to get exam results
export const getExamResult = async (examId, studentId) => {
  try {
    const response = await axiosInstance.get(`/exams/${examId}/results/${studentId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching exam result:", error);
    throw error;
  }
};

// Function to set exam results
export const setExamResult = async (examId, resultData) => {
  try {
    const response = await axiosInstance.post(`/exams/${examId}/results`, resultData);
    return response.data;
  } catch (error) {
    console.error("Error setting exam result:", error);
    throw error;
  }
};
