import axios from "axios";
import { store } from "../redux/store";
import { setGlobalError, setLoading } from "../redux/slices/utilSlice";

const api = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    store.dispatch(setLoading(true));
    return config;
  },
  (error) => {
    store.dispatch(setLoading(false));
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    store.dispatch(setLoading(false));
    return response;
  },
  (error) => {
    store.dispatch(setLoading(false));

    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        store.dispatch(setGlobalError("Unauthorized access"));
      } else if (status === 500) {
        store.dispatch(setGlobalError("Server error, please try again later"));
      } else {
        store.dispatch(setGlobalError("Someting went wrong, please try again later"));
      }
    } else {
      store.dispatch(setGlobalError("Network error, check your connection"));
    }

    return Promise.reject(error);
  }
);

export default api;
