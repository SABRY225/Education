import axiosInstance from "./axiosInstance";

// Function to add an answer
export const addAnswer = async (answerData) => {
  try {
    const response = await axiosInstance.post('/answer', answerData);
    return response.data;
  } catch (error) {
    console.error("Error adding answer:", error);
    throw error;
  }
};

// Function to edit an answer
export const editAnswer = async (answerId, updatedData) => {
  try {
    const response = await axiosInstance.put(`/answer/${answerId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error editing answer:", error);
    throw error;
  }
};

// Function to delete an answer
export const deleteAnswer = async (answerId) => {
  try {
    const response = await axiosInstance.delete(`/answer/${answerId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting answer:", error);
    throw error;
  }
};
