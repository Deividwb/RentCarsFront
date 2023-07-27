import { useNavigate, useParams } from "react-router-dom";
import { useDriversData } from "../use-drivers";
import { postDrivers, putDrivers } from "../../store/drivers/drivers.sagas";
import { useDispatch } from "react-redux";

export const useSubmit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const driversData = useDriversData();
  const dispatch = useDispatch();

  const prepareData = {
    ...driversData,
    name: driversData.name,
    age: driversData.age,
    address: driversData.address,
    city: driversData.city,
    sexo: driversData.sexo,
  };


  const onDriversSubmit = () => {
    if (id) {
      console.log("Atualizado co sucesso");
      dispatch(putDrivers({ id: id, data: prepareData }));
      // return dispatch(updateDrivers({data:prepareData}))
    } else {
      console.log("Criado co sucesso");
      dispatch(postDrivers({ data: prepareData }));
    }
    navigate(-1);
  };
  return { onDriversSubmit };
};
