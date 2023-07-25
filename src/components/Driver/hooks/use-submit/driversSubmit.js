import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDriversData } from "../use-drivers";

export const useSubmit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const driversData = useDriversData();

  const prepareData = {
    ...driversData,
    name: driversData.name,
    age: driversData.age,                                 
    address: driversData.address,
    city: driversData.city,
    sexo: driversData.sexo,
  };

  async function handlePost() {
    try {
      await axios.post("https://localhost:7184/api/Drivers", prepareData);
      navigate(-1);
    } catch (error) {
      console.error("Error loading drivers:", error);
    }
  }

  const onDriversSubmit = () => {
    if (id) {
      // return dispatch(updateDrivers({data:prepareData}))
    }
    return handlePost();
  };
  return { onDriversSubmit };
};
