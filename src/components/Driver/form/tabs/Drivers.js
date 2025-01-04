import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import CustonTextField from "../../../../componentsLibrary/Inputs/TextField/CustonTextField";
import ReactDOM from "react-dom";
import { useDriversData, useDriversMessages } from "../../hooks/use-drivers";
import { useDriversHandlers } from "../../hooks/use-drivers/useDriversHandlers";

const Drivers = () => {
  const driversData = useDriversData();
  const messages = useDriversMessages();

  useEffect(() => {
    const nameInput = ReactDOM.findDOMNode(document.getElementById("name"));
    if (nameInput) {
      nameInput.focus();
    }
  }, []);

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
            focus={true}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CustonTextField
            id="paymentDay"
            name="paymentDay"
            label="Dia de Pagamento"
            value={driversData.paymentDay}
            handleChange={handleChange()}
            handleBlur={handleBlur()}
            required
            error={!!messages.paymentDay}
            helperText={messages.paymentDay}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CustonTextField
            id="location"
            name="location"
            label="Locação"
            value={driversData.location}
            handleChange={handleChange()}
            handleBlur={handleBlur()}
            required
            error={!!messages.location}
            helperText={messages.location}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Drivers;
