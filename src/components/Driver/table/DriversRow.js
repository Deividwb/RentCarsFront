import React from "react";
import { TableCell } from "@mui/material";

const DriversRow = (props) => {
  return (
    <>
      <TableCell align="left">{props.name}</TableCell>
      <TableCell align="right">{props.age}</TableCell>
      <TableCell align="right">{props.address}</TableCell>
      <TableCell align="right">{props.city}</TableCell>
      <TableCell align="right">{props.sexo}</TableCell>
    </>
  );
};

export default DriversRow;
