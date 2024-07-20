import axiosInstance from "./axiosInstance";

// Function to add an evaluation
export const addEvaluation = async (evaluationData) => {
  try {
    const response = await axiosInstance.post('/evaluations', evaluationData);
    return response.data;
  } catch (error) {
    console.error("Error adding evaluation:", error);
    throw error;
  }
};

// Function to delete an evaluation
export const deleteEvaluation = async (evaluationId) => {
  try {
    const response = await axiosInstance.delete(`/evaluations/${evaluationId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting evaluation:", error);
    throw error;
  }
};
