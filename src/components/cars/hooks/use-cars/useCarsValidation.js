import { useSelector } from "react-redux";
import useValidate from "../../../../utils/useValidate/useValidate";
import {
  selectCars,
  updateCarsData,
  updateCarsMessages,
} from "../../store/cars/cars.store";

export const useCarsValidation = () => {
  const state = useSelector(selectCars);

  const requiredFields = [
    {
      name: "brand",
    },
    {
      name: "modelYear",
    },
    {
      name: "plate",
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
    updateForm: updateCarsData,
    updateMessage: updateCarsMessages,
    requiredFields,
    validateFields,
  });

  return { hasError };
};
