import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import CustonTextField from "../../../../componentsLibrary/Inputs/TextField/CustonTextField";
import ReactDOM from "react-dom";
import { useDriversData, useDriversMessages } from "../../hooks/use-drivers";
import { useDriversHandlers } from "../../hooks/use-drivers/useDriversHandlers";
import { useDispatch } from "react-redux";
import { getViaCep } from "../../store/drivers/drivers.sagas";

const Address = () => {
  const driversData = useDriversData();
  const messages = useDriversMessages();
  const dispatch = useDispatch();

  useEffect(() => {
    const cepInput = ReactDOM.findDOMNode(document.getElementById("cep"));
    if (cepInput) {
      cepInput.focus();
    }
  }, []);

  const { handleBlur, handleChange } = useDriversHandlers(driversData);

  // {
  //   cep: "01001-000",
  //   logradouro: "Rua Valência",
  //   complemento: "",
  //   bairro: "Jardim Bertoni",
  //   localidade: "Americana",
  //   uf: "SP",
  //   ibge: "3501608",
  //   gia: "1650",
  //   ddd: "19",
  //   siafi: "6131",
  // },

  const handleGetAddress = (_, value) => {
    if (value.length === 8) {
      dispatch(getViaCep({ cep: value }));
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <CustonTextField
            id="cep"
            name="cep"
            label="CEP"
            value={driversData?.cep}
            handleChange={handleChange(handleGetAddress)}
            handleBlur={handleBlur()}
            required
            error={!!messages?.cep}
            helperText={messages?.cep}
            // type="number"
          />
        </Grid>
        <Grid item xs={12} sm={9} />

        <Grid item xs={12} sm={6}>
          <CustonTextField
            id="city"
            name="city"
            label="Cidade"
            value={driversData?.city}
            handleChange={handleChange()}
            handleBlur={handleBlur(handleGetAddress)}
            required
            error={!!messages?.city}
            helperText={messages?.city}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CustonTextField
            id="district"
            name="district"
            label="Bairro"
            value={driversData?.district}
            handleChange={handleChange()}
            handleBlur={handleBlur()}
            required
            error={!!messages?.district}
            helperText={messages?.district}
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <CustonTextField
            id="uf"
            name="uf"
            label="Estado"
            value={driversData?.uf}
            handleChange={handleChange()}
            handleBlur={handleBlur()}
            required
            error={!!messages?.uf}
            helperText={messages?.uf}
          />
        </Grid>

        <Grid item xs={12} sm={8}>
          <CustonTextField
            id="street"
            name="street"
            label="Rua"
            value={driversData?.street}
            handleChange={handleChange()}
            handleBlur={handleBlur()}
            required
            error={!!messages?.street}
            helperText={messages?.street}
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <CustonTextField
            id="number"
            name="number"
            label="Numero"
            value={driversData?.number}
            handleChange={handleChange()}
            handleBlur={handleBlur()}
            required
            type="number"
            error={!!messages?.number}
            helperText={messages?.number}
            focus={true}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Address;
