import { useSelector } from "react-redux";
import {
  selectDriversMessages,
  updateDriversData,
  updateDriversMessages,
} from "../../store/drivers/drivers.store";
import useHandlers from "../../../../utils/useHandlers/useHandlers";

export const useDriversHandlers = () => {
  const messages = useSelector(selectDriversMessages);

  const events = useHandlers(
    updateDriversData,
    updateDriversMessages,
    messages
  );

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
