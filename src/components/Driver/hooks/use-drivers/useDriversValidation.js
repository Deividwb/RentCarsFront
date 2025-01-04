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
      name: "paymentDay",
    },
    {
      name: "location",
    },
    {
      name: "cep",
    },
    {
      name: "city",
    },
    {
      name: "district",
    },
    {
      name: "uf",
    },
    {
      name: "street",
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
