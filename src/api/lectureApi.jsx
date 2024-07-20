import axiosInstance from "./axiosInstance";

// Function to add a lecture
export const addLecture = async (lectureData) => {
  try {
    const response = await axiosInstance.post('/lectures', lectureData);
    return response.data;
  } catch (error) {
    console.error("Error adding lecture:", error);
    throw error;
  }
};

// Function to edit a lecture
export const editLecture = async (lectureId, updatedData) => {
  try {
    const response = await axiosInstance.put(`/lectures/${lectureId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error editing lecture:", error);
    throw error;
  }
};

// Function to delete a lecture
export const deleteLecture = async (lectureId) => {
  try {
    const response = await axiosInstance.delete(`/lectures/${lectureId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting lecture:", error);
    throw error;
  }
};

// Function to get lectures in a course
export const getLecturesInCourse = async (courseId) => {
  try {
    const response = await axiosInstance.get(`/courses/${courseId}/lectures`);
    return response.data;
  } catch (error) {
    console.error("Error fetching lectures in course:", error);
    throw error;
  }
};

// Function to get a lecture by its ID
export const getLectureById = async (lectureId) => {
  try {
    const response = await axiosInstance.get(`/lectures/${lectureId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching lecture by ID:", error);
    throw error;
  }
};

// Function to get the number of lectures
export const getNumOfLectures = async () => {
  try {
    const response = await axiosInstance.get('/lectures/count');
    return response.data;
  } catch (error) {
    console.error("Error fetching number of lectures:", error);
    throw error;
  }
};
