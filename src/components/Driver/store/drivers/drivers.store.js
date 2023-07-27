import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  data: {
    name: "",
    age: "",
    address: "",
    city: "",
    sexo: "",
  },
  messages: {},
  getAllDrivers: [],
};

const drivers = createSlice({
  name: "drivers",
  initialState: initialState,
  reducers: {
    updateDriversData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    updateDriversMessages: (state, action) => {
      state.messages = { ...state.messages, ...action.payload };
    },
    updategetAllDrivers: (state, action) => {
      state.getAllDrivers = action.payload;
    },
    clearDrivers: () => initialState,
  },
});

export const {
  updateDriversData,
  updateDriversMessages,
  updategetAllDrivers,
  clearDrivers,
} = drivers.actions;

export const selectDrivers = (state) => state.drivers.driversData;
export const selectDriversData = (state) => state.drivers.driversData.data;
export const selectDriversMessages = (state) =>
  state.drivers.driversData.messages;
export const selectAllDrivers = (state) =>
  state.drivers.driversData.getAllDrivers;

export default drivers.reducer;
