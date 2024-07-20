import axiosInstance from "./axiosInstance";

// Function to get the number of students
export const getNumOfStudents = async () => {
  try {
    const response = await axiosInstance.get('/students/count');
    return response.data;
  } catch (error) {
    console.error("Error fetching number of students:", error);
    throw error;
  }
};
