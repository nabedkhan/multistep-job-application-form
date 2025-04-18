import { configureStore } from "@reduxjs/toolkit";

import jobsReducer from "./slices/jobsSlice";
import coverLetterReducer from "./slices/coverLetterSlice";

export const createStore = () => {
  return configureStore({
    reducer: {
      jobs: jobsReducer,
      coverLetter: coverLetterReducer
    }
  });
};

export type AppStore = ReturnType<typeof createStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
