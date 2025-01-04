import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  data: {
    id: "",
    brand: "",
    plate: "",
    modelYear: "",
    monthLicensing: "",
    numberRenavam: "",
    colorCar: "",
    imageUrls: [],
    id_driver: null,
  },
  messages: {},
  getAllCars: [],
};

const cars = createSlice({
  name: "cars",
  initialState: initialState,
  reducers: {
    updateCarsData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    updateCarsMessages: (state, action) => {
      state.messages = { ...state.messages, ...action.payload };
    },
    updategetAllCars: (state, action) => {
      state.getAllCars = action.payload;
    },
    clearCars: () => initialState,
  },
});

export const {
  updateCarsData,
  updateCarsMessages,
  updategetAllCars,
  clearCars,
} = cars.actions;

export const selectCars = (state) => state.cars.carsData;
export const selectCarsData = (state) => state.cars.carsData.data;
export const selectCarsMessages = (state) => state.cars.carsData.messages;
export const selectAllCars = (state) => state.cars.carsData.getAllCars;

export default cars.reducer;
