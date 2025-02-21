import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
  name: "doctors",
  initialState: {
    doctors: [],
  },
  reducers: {
    listDoctors: (state, action) => {
      state.doctors = action.payload;
    },
  },
});

export const { listDoctors } = doctorSlice.actions;
export const doctorsSelector = (state) => state.doctors?.doctors;

export default doctorSlice.reducer;
