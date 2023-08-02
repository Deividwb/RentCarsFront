import { Grid } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import CustonTextField from "../../../../componentsLibrary/Inputs/TextField/CustonTextField";
import ReactDOM from "react-dom";
import { useDriversData, useDriversMessages } from "../../hooks/use-drivers";
import { useDispatch } from "react-redux";
import { updateDriversData } from "../../store/drivers/drivers.store";
import { useDriversHandlers } from "../../hooks/use-drivers/useDriversHandlers";

const Drivers = () => {
  const driversData = useDriversData();
  const dispatch = useDispatch();
  const messages = useDriversMessages();

  // useEffect(() => {
  //   const nameInput = ReactDOM.findDOMNode(document.getElementById("name"));
  //   if (nameInput) {
  //     nameInput.focus();
  //   }
  // }, []);

  const { handleBlur, handleChange } = useDriversHandlers(driversData);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <CustonTextField
            id="name"
            name="name"
            label="Nome"
            value={driversData.name}
            handleChange={handleChange()}
            handleBlur={handleBlur()}
            required
            error={!!messages.name}
            helperText={messages.name}
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <CustonTextField
            id="age"
            name="age"
            label="Idade"
            value={driversData.age}
            handleChange={handleChange()}
            handleBlur={handleBlur()}
            required
            type="number"
            error={!!messages.age}
            helperText={messages.age}
            focus={true}
          />
        </Grid>

        <Grid item xs={12} sm={10}>
          <CustonTextField
            id="address"
            name="address"
            label="Endereço"
            value={driversData.address}
            handleChange={handleChange()}
            handleBlur={handleBlur()}
            required
            error={!!messages.address}
            helperText={messages.address}
          />
        </Grid>

        <Grid item xs={12} sm={10}>
          <CustonTextField
            id="city"
            name="city"
            label="Cidade"
            value={driversData.city}
            handleChange={handleChange()}
            handleBlur={handleBlur()}
            required
            error={!!messages.city}
            helperText={messages.city}
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <CustonTextField
            id="sexo"
            name="sexo"
            label="Sexo"
            value={driversData.sexo}
            handleChange={handleChange()}
            handleBlur={handleBlur()}
            required
            error={!!messages.sexo}
            helperText={messages.sexo}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Drivers;
