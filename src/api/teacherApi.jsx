import axiosInstance from "./axiosInstance";

// Function to add a teacher's image
export const addImgTeacher = async (teacherId, imageData) => {
  try {
    const response = await axiosInstance.post(`/teachers/${teacherId}/image`, imageData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error adding teacher's image:", error);
    throw error;
  }
};

// Function to delete a teacher's image
export const deleteImgTeacher = async (teacherId) => {
  try {
    const response = await axiosInstance.delete(`/teachers/${teacherId}/image`);
    return response.data;
  } catch (error) {
    console.error("Error deleting teacher's image:", error);
    throw error;
  }
};

// Function to get the number of teachers
export const getNumOfTeachers = async () => {
  try {
    const response = await axiosInstance.get('/teachers/count');
    return response.data;
  } catch (error) {
    console.error("Error fetching number of teachers:", error);
    throw error;
  }
};
