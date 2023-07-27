import React from "react";
import { templateActionsButtonsStyles } from "../../../templates/templateActionsButtons/style";
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";

const DeleteButton = ({ arrayTabs, footer }) => {
  const classes = templateActionsButtonsStyles();

  return (
    <>
      <span class="material-icons-outlined">drive_file_rename_outline</span>
    </>
  );
};

export default DeleteButton;
