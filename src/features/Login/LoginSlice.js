import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  phoneNumber: "",
  email: "",
  profilePicture: "",
  password: "",
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    createUser(state, action) {
      state.username = action.payload.username;
      state.phoneNumber = action.payload.phoneNumber;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isLoggedIn = true;
    },
    logOff(state, action) {
      state.isLoggedIn = false;
    },
    logInUser(state, action) {
      state.isLoggedIn = true;
    },

    deleteUser(state, action) {
      state = initialState;
    },
  },
});

export const { createUser, logOff, deleteUser, logInUser } = loginSlice.actions;

export default loginSlice.reducer;
