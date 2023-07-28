import React from "react";
import { TableCell } from "@mui/material";
import TemplateActionsButtons from "../../../templates/templateActionsButtons/TemplateActionsButtons";
import { baseUrlRoute } from "../utils/drivers.constants";
import { deleteDrivers, getByIdDrivers } from "../store/drivers/drivers.sagas";

const DriversRow = (props) => {
  return (
    <>
      <TableCell align="left">{props.name}</TableCell>
      <TableCell align="right">{props.age}</TableCell>
      <TableCell align="right">{props.address}</TableCell>
      <TableCell align="right">{props.city}</TableCell>
      <TableCell align="right">{props.sexo}</TableCell>

      <TemplateActionsButtons
        redirect={`/${baseUrlRoute}/${props.id}/edit`}
        id={props.id}
        item={props.name}
        getItem={getByIdDrivers}
        deleteItem={deleteDrivers}
      />
    </>
  );
};

export default DriversRow;
