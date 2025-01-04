import { useSelector } from "react-redux";
import useHandlers from "../../../../utils/useHandlers/useHandlers";
import {
  selectCarsMessages,
  updateCarsData,
  updateCarsMessages,
} from "../../store/cars/cars.store";

export const useCarsHandlers = () => {
  const messages = useSelector(selectCarsMessages);

  const events = useHandlers(updateCarsData, updateCarsMessages, messages);

  const callbacks = {};

  const selects = {};

  const extraHandlers = {};

  return {
    ...events,
    selects,
    callbacks,
    extraHandlers,
  };
};
