import axiosInstance from "./axiosInstance";

// Function to add a course
export const addCourse = async (courseData) => {
  try {
    const response = await axiosInstance.post('/courses', courseData);
    return response.data;
  } catch (error) {
    console.error("Error adding course:", error);
    throw error;
  }
};

// Function to edit a course
export const editCourse = async (courseId, updatedData) => {
  try {
    const response = await axiosInstance.put(`/courses/${courseId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error editing course:", error);
    throw error;
  }
};

// Function to delete a course
export const deleteCourse = async (courseId) => {
  try {
    const response = await axiosInstance.delete(`/courses/${courseId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting course:", error);
    throw error;
  }
};

// Function to enroll in a course
export const enrollCourse = async (courseId, studentData) => {
  try {
    const response = await axiosInstance.post(`/courses/${courseId}/enroll`, studentData);
    return response.data;
  } catch (error) {
    console.error("Error enrolling in course:", error);
    throw error;
  }
};

// Function to get all courses
export const getCourses = async () => {
  try {
    const response = await axiosInstance.get('/courses');
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

// Function to get a course by its ID
export const getCourseById = async (courseId) => {
  try {
    const response = await axiosInstance.get(`/courses/${courseId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching course by ID:", error);
    throw error;
  }
};

// Function to get courses by teacher
export const getCoursesByTeacher = async (teacherId) => {
  try {
    const response = await axiosInstance.get(`/teachers/${teacherId}/courses`);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses by teacher:", error);
    throw error;
  }
};

// Function to get the number of students in a course
export const getNumOfStudentsInCourse = async (courseId) => {
  try {
    const response = await axiosInstance.get(`/courses/${courseId}/students/count`);
    return response.data;
  } catch (error) {
    console.error("Error fetching number of students in course:", error);
    throw error;
  }
};

// Function to get the number of courses
export const getNumOfCourses = async () => {
  try {
    const response = await axiosInstance.get('/courses/count');
    return response.data;
  } catch (error) {
    console.error("Error fetching number of courses:", error);
    throw error;
  }
};
