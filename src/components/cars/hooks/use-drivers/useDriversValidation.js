import { useSelector } from "react-redux";
import {
  selectDrivers,
  updateDriversData,
  updateDriversMessages,
} from "../../store/drivers/drivers.store";
import useValidate from "./../../../../utils/useValidate/useValidate";

export const useDriversValidation = () => {
  const state = useSelector(selectDrivers);

  const requiredFields = [
    {
      name: "name",
    },
    {
      name: "age",
    },
    {
      name: "address",
    },
    {
      name: "city",
    },
    {
      name: "sexo",
    },
  ];

  const validateFields = [
    {
      //   name: "propriedade",
      //   validation: (value, state) => value === 0,
      //   message: "mensagem aqui",
    },
  ];

  const { hasError } = useValidate({
    state,
    updateForm: updateDriversData,
    updateMessage: updateDriversMessages,
    requiredFields,
    validateFields,
  });

  return { hasError };
};
