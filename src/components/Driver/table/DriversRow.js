import React from "react";
import { TableCell } from "@mui/material";
import TemplateActionsButtons from "../../../templates/templateActionsButtons/TemplateActionsButtons";
import { baseUrlRoute } from "../utils/drivers.constants";
import { updateDriversData } from "../store/drivers/drivers.store";

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
        // updateData={updateDriversData}
        // data={props}
      />
    </>
  );
};

export default DriversRow;
