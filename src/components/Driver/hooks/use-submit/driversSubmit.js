import { useNavigate, useParams } from "react-router-dom";
import { useDriversData } from "../use-drivers";
import { postDrivers, putDrivers } from "../../store/drivers/drivers.sagas";
import { useDispatch } from "react-redux";
import { useDriversValidation } from "../use-drivers/useDriversValidation";
import { toast } from "react-toastify";

export const useSubmit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const driversData = useDriversData();

  const dispatch = useDispatch();

  const { hasError } = useDriversValidation();

  const allHasError = () => {
    let returnError = [hasError()];
    return returnError.includes(true);
  };

  const prepareData = {
    ...driversData,
    number: Number(driversData?.number),
  };

  const onDriversSubmit = () => {
    if (allHasError()) {
      return toast.error("Verifique todos os campos obrigatórios");
    }

    if (id) {
      dispatch(putDrivers({ id: id, data: prepareData }));
    } else {
      dispatch(postDrivers({ data: prepareData }));
    }
    navigate(-1);
  };
  return { onDriversSubmit };
};
