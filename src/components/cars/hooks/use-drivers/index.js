import { useSelector } from "react-redux";
import {
  selectAllDrivers,
  selectDriversData,
  selectDriversMessages,
} from "../../store/drivers/drivers.store";

const useDriversData = () => {
  return useSelector(selectDriversData);
};

const useDriversMessages = () => {
  return useSelector(selectDriversMessages);
};

const useAllDrivers = () => {
  return useSelector(selectAllDrivers);
};

export { useDriversData, useDriversMessages, useAllDrivers };
