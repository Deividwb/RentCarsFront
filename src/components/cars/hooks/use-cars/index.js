import { useSelector } from "react-redux";
import {
  selectAllCars,
  selectCarsData,
  selectCarsMessages,
} from "../../store/cars/cars.store";
// import {
//   selectAllCars,
//   selectCarsData,
//   selectCarsMessages,
// } from "../../store/cars/cars.store";

const useCarsData = () => {
  return useSelector(selectCarsData);
};

const useCarsMessages = () => {
  return useSelector(selectCarsMessages);
};

const useAllCars = () => {
  return useSelector(selectAllCars);
};

export { useCarsData, useCarsMessages, useAllCars };
