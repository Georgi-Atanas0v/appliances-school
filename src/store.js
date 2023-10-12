import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/Login/LoginSlice";
const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
