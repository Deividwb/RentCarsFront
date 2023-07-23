import React, { useState } from "react";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";

const CustomCurrencyTextField = ({
  id,
  name,
  label,
  currencySymbol = "R$",
}) => {
  const [value, setValue] = useState();

  return (
    <CurrencyTextField
      id={id}
      name={name}
      label={label}
      variant="standard"
      value={value}
      currencySymbol={currencySymbol}
      minimumValue="0"
      outputFormat="string"
      decimalCharacter="."
      digitGroupSeparator=","
      onChange={(event, value) => setValue(value)}
    />
  );
};

export default CustomCurrencyTextField;
