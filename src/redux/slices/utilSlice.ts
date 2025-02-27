import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NotificationPayload {
  type: "success" | "info" | "warning" | "error";
  message: string;
  description: string;
}

interface UtilState {
  isLoading: boolean;
  globalError: string | null;
  notification: NotificationPayload | null;
}

const initialState: UtilState = {
  isLoading: false,
  globalError: null,
  notification: null,
};

const utilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setGlobalError: (state, action: PayloadAction<string | null>) => {
      state.globalError = action.payload;
    },
    clearGlobalError: (state) => {
      state.globalError = null;
    },
    setNotification: (state, action: PayloadAction<NotificationPayload>) => {
      state.notification = action.payload;
    },
    clearNotification: (state) => {
      state.notification = null;
    },
  },
});

export const { setLoading, setGlobalError, clearGlobalError, setNotification, clearNotification } = utilSlice.actions;
export default utilSlice.reducer;
