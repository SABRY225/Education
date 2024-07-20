import axiosInstance from "./axiosInstance";

// Function to add a question
export const addQuestion = async (questionData) => {
  try {
    const response = await axiosInstance.post('/questions', questionData);
    return response.data;
  } catch (error) {
    console.error("Error adding question:", error);
    throw error;
  }
};

// Function to edit a question
export const editQuestion = async (questionId, updatedData) => {
  try {
    const response = await axiosInstance.put(`/questions/${questionId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error editing question:", error);
    throw error;
  }
};

// Function to delete a question
export const deleteQuestion = async (questionId) => {
  try {
    const response = await axiosInstance.delete(`/questions/${questionId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting question:", error);
    throw error;
  }
};

// Function to get questions in an exam
export const getQuestionsInExam = async (examId) => {
  try {
    const response = await axiosInstance.get(`/exams/${examId}/questions`);
    return response.data;
  } catch (error) {
    console.error("Error fetching questions in exam:", error);
    throw error;
  }
};

// Function to get a question by its ID
export const getQuestionById = async (questionId) => {
  try {
    const response = await axiosInstance.get(`/questions/${questionId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching question by ID:", error);
    throw error;
  }
};

// Function to get the number of questions
export const getNumOfQuestions = async () => {
  try {
    const response = await axiosInstance.get('/questions/count');
    return response.data;
  } catch (error) {
    console.error("Error fetching number of questions:", error);
    throw error;
  }
};
