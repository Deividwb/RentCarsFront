import { useSelector } from "react-redux";
import {
  selectDriversData,
  selectDriversMessages,
} from "../../store/drivers/drivers.store";

const useDriversData = () => {
  return useSelector(selectDriversData);
};

const useDriversMessages = () => {
  return useSelector(selectDriversMessages);
};

export { useDriversData, useDriversMessages };
