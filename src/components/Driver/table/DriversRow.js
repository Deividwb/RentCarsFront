import React from "react";
import { TableCell, TableRow } from "@mui/material";

const DriversRow = (props, labelId) => {
  const open = false;

  return (
    <>
      <TableCell align="left">{props.name}</TableCell>
      <TableCell align="right">{props.age}</TableCell>
      <TableCell align="right">{props.address}</TableCell>
      <TableCell align="right">{props.city}</TableCell>
      <TableCell align="right">{props.sexo}</TableCell>
      {open && (
        <TableRow>
          <TableCell align="right">{23}</TableCell>
          <TableCell align="right">{24}</TableCell>
        </TableRow>
      )}
    </>
  );
};

export default DriversRow;
