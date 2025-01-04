import React from "react";
import { TableCell } from "@mui/material";
import TemplateActionsButtons from "../../../templates/templateActionsButtons/TemplateActionsButtons";
import { baseUrlRoute } from "../utils/drivers.constants";
import { deleteDrivers, getByIdDrivers } from "../store/drivers/drivers.sagas";

const DriversRow = (props) => {
  return (
    <>
      <TableCell align="left">{props.name}</TableCell>
      <TableCell align="right">{props.city}</TableCell>
      <TableCell align="right">{props.district}</TableCell>
      <TableCell align="right">{props.paymentDay}</TableCell>
      <TableCell align="right">{props.location}</TableCell>

      <TemplateActionsButtons
        className={""}
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
