import axiosInstance from "./axiosInstance";

// Sign in user with credentials
export const signIn = async (credentials) => {
  try {
    const response = await axiosInstance.post("Account/login", credentials);
    console.log("responsedatasignin: ",response.data);

    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Sign out user
export const signOut = async () => {
  try {
    const response = await axiosInstance.post("Account/LogOut");
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Refresh authentication token
export const refreshToken = async () => {
  try {
    const response = await axiosInstance.get("Account/refresh-token");
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Sign up new user
export const signUp = async (userData) => {
  try {
    console.log(userData);
    const response = await axiosInstance.post("Account/register", userData);
    return response.data;
  } catch (error) {
    console.log(error.response.data.description)
    return handleError(error.response.data.description);
  }
};

// Verify OTP
export const verifyOtp = async (otpData) => {
  try {
    const response = await axiosInstance.post("Account/verify-otp", otpData);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Send OTP to user email
export const sendOtp = async (emailUser) => {
  try {
    const response = await axiosInstance.post("Account/send-otp", { email: emailUser });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Get current user information
export const getCurrentUser = async (token) => {
  console.log(token);
  try {
    const response = await axiosInstance.get("Account/user", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type":"application/json"
      }
    });

    console.log("Response data: ", response.data);
    return response.data;
  } catch (error) {
    console.log(error)
  }
};

// Edit user information
export const editInfoUser = async (infoData) => {
  console.log(infoData);
  const formData = new FormData();
  formData.append('firstName', infoData.firstName);
  formData.append('lastName', infoData.lastName);
  formData.append('govenorate', infoData.govenorate);
  formData.append('phoneNumber', infoData.phoneNumber);
  try {
    const response = await axiosInstance.put("Account/account", formData,{
      headers: {
        Authorization: `Bearer ${infoData.token}`,
        "Content-Type":"application/json"
      }
    });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Change user password
export const changePassword = async (passwordData) => {
  try {
    const response = await axiosInstance.put("Account/change-password", passwordData);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Request password reset
export const forgetPassword = async (emailUser) => {
  try {
    const response = await axiosInstance.post("Account/forget-password", { email: emailUser });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Reset password with new password
export const resetPassword = async (passwordData) => {
  try {
    const response = await axiosInstance.post("Account/reset-password", passwordData);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Handle errors
const handleError = (error) => {
  // You can add custom error handling here
  console.error("API call error:", error);
  return { error: error.message || "An unknown error occurred" };
};
