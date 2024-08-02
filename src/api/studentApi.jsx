import axiosInstance from "./axiosInstance";

// Function to get the number of students
export const getNumOfStudents = async (token) => {
  try {
    const response = await axiosInstance.get('/Student/count', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching number of students:", error);
    throw error;
  }
};
