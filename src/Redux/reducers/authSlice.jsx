import { createSlice } from '@reduxjs/toolkit';
import {
  signInUser,
  signOutUser,
  refreshAuthToken,
  signUpUser,
  verifyOtpCode,
  sendOtpEmail,
  fetchCurrentUser,
  updateUserInfo,
  updatePassword,
  requestPasswordReset,
  resetUserPassword,
  updateUserImg
} from '../actions/authActions';

const initialState = {
  user: null,
  id: null,
  firstName: null,
  lastName: null,
  image:null,
  email: null,
  phoneNumber: null,
  govenorate: null,
  token: null,
  tokenExpiry: null, // Add tokenExpiry to manage token expiration
  loading: false,
  roles: null,
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.tokenExpiry = null;
      state.roles = null;
      state.isAuthenticated = false;
    },
    setTokenExpiry(state, action) {
      state.tokenExpiry = action.payload;
    },
    setInfoProfile(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.phoneNumber = action.payload.phoneNumber;
      state.govenorate = action.payload.govenorate;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.tokenExpiry = action.payload.refreshTokenExpiration; // Handle token expiry
        state.roles = action.payload.roles;
        state.isAuthenticated = action.payload.isAuthenticated;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signOutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signOutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.tokenExpiry = null; // Clear token expiry on sign out
        state.roles = null;
        state.isAuthenticated = false;
      })
      .addCase(signOutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(refreshAuthToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(refreshAuthToken.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.tokenExpiry = action.payload.tokenExpiry; // Update token expiry
      })
      .addCase(refreshAuthToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(verifyOtpCode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtpCode.fulfilled, (state, action) => {
        state.loading = false;
        state.roles = action.payload.roles;
        state.token = action.payload.token;
        state.tokenExpiry = action.payload.tokenExpiry; // Handle token expiry
      })
      .addCase(verifyOtpCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(sendOtpEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendOtpEmail.fulfilled, (state) => {
        state.loading = false;
        // Handle successful OTP sending if needed
      })
      .addCase(sendOtpEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.id = action.payload.id;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.email = action.payload.email;
        state.phoneNumber = action.payload.phoneNumber;
        state.govenorate = action.payload.govenorate;
        state.image = action.payload.image;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserImg.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserImg.fulfilled, (state, action) => {
        state.loading = false;
        state.image = action.payload.image;
      })
      .addCase(updateUserImg.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updatePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.loading = false;
        // Handle successful password change if needed
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(requestPasswordReset.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestPasswordReset.fulfilled, (state) => {
        state.loading = false;
        // Handle successful password reset request if needed
      })
      .addCase(requestPasswordReset.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(resetUserPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetUserPassword.fulfilled, (state) => {
        state.loading = false;
        // Handle successful password reset if needed
      })
      .addCase(resetUserPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, setTokenExpiry ,setInfoProfile} = authSlice.actions;

export default authSlice.reducer;
