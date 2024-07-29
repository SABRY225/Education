import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    signIn,
    signOut,
    refreshToken,
    signUp,
    verifyOtp,
    sendOtp,
    getCurrentUser,
    editInfoUser,
    changePassword,
    forgetPassword,
    resetPassword
  } from '../../api/authApi'; // Adjust the import path as needed
  
  // Async thunks for authentication actions
  export const signInUser = createAsyncThunk('auth/signIn', async (credentials, { rejectWithValue }) => {
    try {
      const data = await signIn(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  });
  
  export const signOutUser = createAsyncThunk('auth/signOut', async (_, { rejectWithValue }) => {
    try {
      const data = await signOut();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  });
  
  export const refreshAuthToken = createAsyncThunk('auth/refresh-Token', async (_, { rejectWithValue }) => {
    try {
      const data = await refreshToken();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  });
  
  export const signUpUser = createAsyncThunk('auth/signUp', async (userData, { rejectWithValue }) => {
      try {
          console.log("userData: ", userData);
          const data = await signUp(userData);
          console.log("Email: ", userData.email);
          localStorage.setItem('email', userData.email); // Optionally store email in localStorage
          return data;
      } catch (error) {
          return rejectWithValue(error.response.data);
      }
  });
  
  export const verifyOtpCode = createAsyncThunk('auth/verifyOtp', async (otpData, { rejectWithValue }) => {
      try {
          const response = await verifyOtp(otpData);
          console.log(response);
          return response; 
      } catch (error) {
          return rejectWithValue(error.response.data);
      }
  });
  
  export const sendOtpEmail = createAsyncThunk('auth/sendOtp', async (emailUser, { rejectWithValue }) => {
    try {
      const data = await sendOtp(emailUser);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  });
  
  export const fetchCurrentUser = createAsyncThunk('auth/user', async (token, { rejectWithValue }) => {
    console.log(token);
    try {
      const data = await getCurrentUser(token);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  });
  
  export const updateUserInfo = createAsyncThunk('auth/editInfoUser', async (infoData, { rejectWithValue }) => {
    console.log(infoData);
    try {
      const data = await editInfoUser(infoData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  });
  
  export const updatePassword = createAsyncThunk('auth/changePassword', async (passwordData, { rejectWithValue }) => {
    try {
      const data = await changePassword(passwordData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  });
  
  export const requestPasswordReset = createAsyncThunk('auth/forgetPassword', async (emailUser, { rejectWithValue }) => {
    try {
      const data = await forgetPassword(emailUser);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  });
  
  export const resetUserPassword = createAsyncThunk('auth/resetPassword', async (passwordData, { rejectWithValue }) => {
    try {
      const data = await resetPassword(passwordData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  });
  