import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialAuthState = {
  user: {
    email: null,
    accountType: null,
    hostID: null,
    isHost: false,
    isVerified: false,
    isVerifiedConsent: null
  },
  token: null,
  expiresAt: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      console.log(action.payload);

      state.isAuthenticated = !!action.payload.email;
      state.expiresAt = action.payload.expiresAt;
      state.token = action.payload.authToken;
      state.user.email = action.payload.email;
      state.user.accountType = action.payload.accountType;
      state.user.isHost = action.payload.isHost;
      state.user.hostID = action.payload.hostID;
      state.user.isVerified = action.payload.isVerified;
    },
    logout(state) {
      Object.assign(state, initialAuthState);
    },
    verifyConsent(state) {
      state.user.isVerifiedConsent = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
