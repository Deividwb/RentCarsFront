import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { postCars, putCars } from "../../store/cars/cars.sagas";
import { useCarsData } from "../use-cars";
import { useCarsValidation } from "../use-cars/useCarsValidation";

export const useSubmit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const carsData = useCarsData();
  const dispatch = useDispatch();

  const { hasError } = useCarsValidation();

  const allHasError = () => {
    let returnError = [hasError()];
    return returnError.includes(true);
  };

  const prepareData = {
    brand: carsData.brand,
    modelYear: carsData.modelYear,
    plate: carsData.plate,

    colorCar: "Prata",

    monthLicensing: "Abril",
    numberRenavam: 1108996512,
    imageUrls: carsData.imageUrls,
    id_Driver: carsData.id_Driver,
  };

  const onCarsSubmit = () => {
    if (allHasError()) {
      return toast.error("Verifique todos os campos obrigatórios");
    }
    if (id) {
      dispatch(putCars({ id: id, data: prepareData }));
    } else {
      dispatch(postCars({ data: prepareData }));
    }
    navigate(-1);
  };
  return { onCarsSubmit };
};
