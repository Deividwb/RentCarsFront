import React from "react";
import { TableCell, Tooltip } from "@mui/material";
import { templateActionsButtonsStyles } from "./style";
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import { blue, grey } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { baseUrlRoute } from "../../components/Driver/utils/drivers.constants";
import { useDispatch } from "react-redux";
import { updateDriversData } from "../../components/Driver/store/drivers/drivers.store";
import { useDriversData } from "../../components/Driver/hooks/use-drivers";
import {
  deleteDrivers,
  getByIdDrivers,
} from "../../components/Driver/store/drivers/drivers.sagas";

const TemplateActionsButtons = ({ redirect, updateData, id }) => {
  const classes = templateActionsButtonsStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const driversData = useDriversData();

  const handleEdit = () => {
    dispatch(getByIdDrivers({ id: id }));
    console.log("DDATA:", driversData);
    navigate(redirect);
  };

  const handleDelete = () => {
    dispatch(deleteDrivers({ id: id }));
    console.log("DDATA:", driversData);
  };

  return (
    <>
      <TableCell align="right">
        <Tooltip title={"Editar dados"}>
          <IconButton size="small" onClick={handleEdit}>
            <EditNoteTwoToneIcon sx={{ color: blue[900], fontSize: 30 }} />
          </IconButton>
        </Tooltip>

        <Tooltip title={"Deletar dados"}>
          <IconButton size="small" onClick={handleDelete}>
            <DeleteForeverTwoToneIcon sx={{ color: blue[900], fontSize: 30 }} />
          </IconButton>
        </Tooltip>
      </TableCell>
    </>
  );
};

export default TemplateActionsButtons;
