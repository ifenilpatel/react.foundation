import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import utilReducer from "./slices/utilSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    util: utilReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
