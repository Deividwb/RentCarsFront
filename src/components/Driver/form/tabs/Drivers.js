import { Grid } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import CustonTextField from "../../../../componentsLibrary/Inputs/TextField/CustonTextField";
import ReactDOM from "react-dom";
import { useDriversData } from "../../hooks/use-drivers";
import { useDispatch } from "react-redux";
import { updateDriversData } from "../../store/drivers/drivers.store";

const Drivers = () => {
  const driversData = useDriversData();
  const dispatch = useDispatch();

  useEffect(() => {
    const nameInput = ReactDOM.findDOMNode(document.getElementById("name"));
    if (nameInput) {
      nameInput.focus();
    }
  }, []);

  const handleChange = (event) => {
    dispatch(
      updateDriversData({
        [event.target.name]: event.target.value,
      })
    );
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <CustonTextField
            id="name"
            name="name"
            label="Nome"
            value={driversData.name}
            handleChange={handleChange}
            required
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <CustonTextField
            id="age"
            name="age"
            label="Idade"
            value={driversData.age}
            handleChange={handleChange}
            required
            type="number"
          />
        </Grid>

        <Grid item xs={12} sm={10}>
          <CustonTextField
            id="address"
            name="address"
            label="Endereço"
            value={driversData.address}
            handleChange={handleChange}
            required
          />
        </Grid>

        <Grid item xs={12} sm={10}>
          <CustonTextField
            id="city"
            name="city"
            label="Cidade"
            value={driversData.city}
            handleChange={handleChange}
            required
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <CustonTextField
            id="sexo"
            name="sexo"
            label="Sexo"
            value={driversData.sexo}
            handleChange={handleChange}
            required
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Drivers;
