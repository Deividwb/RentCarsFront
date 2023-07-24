import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  data: {
    name: "Deividaozao",
    age: 1914,
    address: "",
    city: "",
    sexo: "",
  },
  messages: {},
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
    clearDrivers: () => initialState,
  },
});

export const { updateDriversData, updateDriversMessages, clearDrivers } =
  drivers.actions;

export const selectDrivers = (state) => state.drivers.driversData;
export const selectDriversData = (state) => state.drivers.driversData.data;
export const selectDriversMessages = (state) =>
  state.drivers.driversData.messages;

export default drivers.reducer;
