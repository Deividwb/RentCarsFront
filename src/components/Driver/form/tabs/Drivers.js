import { Grid } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import CustonTextField from "../../../../componentsLibrary/Inputs/TextField/CustonTextField";

const Drivers = () => {
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <CustonTextField
            id="name"
            name="name"
            label="Nome"
            required
            inputRef={nameInputRef}
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <CustonTextField
            id="age"
            name="age"
            label="Idade"
            required
            type="number"
          />
        </Grid>

        <Grid item xs={12} sm={10}>
          <CustonTextField
            id="address"
            name="address"
            label="Endereço"
            required
          />
        </Grid>

        <Grid item xs={12} sm={10}>
          <CustonTextField id="city" name="city" label="Cidade" required />
        </Grid>

        <Grid item xs={12} sm={2}>
          <CustonTextField id="sexo" name="sexo" label="Sexo" required />
        </Grid>
      </Grid>
    </>
  );
};

export default Drivers;
