import { createSlice } from "@reduxjs/toolkit";
import { JOB_TITLES } from "@/data/jobs";
import { JOB_SCHEDULE } from "@/data/jobs";

interface Values {
  id: number;
  title: string;
  value: string;
}

interface JobsState {
  titles: Values[];
  schedules: Values[];
}

const initialState: JobsState = {
  titles: JOB_TITLES,
  schedules: JOB_SCHEDULE
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {}
});

// export const { submitApplication } = jobsSlice.actions;
export default jobsSlice.reducer;
