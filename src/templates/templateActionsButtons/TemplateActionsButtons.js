import React, { useState } from "react";
import { DialogTitle, TableCell, Tooltip } from "@mui/material";
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import { blue } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CardFooter } from "reactstrap";
import CustomDialogModal from "../../componentsLibrary/Modal/dialog/DialogModal";
import { templateActionsButtonsStyles } from "./style";

const TemplateActionsButtons = ({
  redirect,
  id,
  item,
  getItem,
  deleteItem,
}) => {
  const classes = templateActionsButtonsStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);

  const handleEdit = () => {
    dispatch(getItem({ id: id }));
    navigate(redirect);
  };

  const handleDelete = () => {
    dispatch(deleteItem({ id: id }));
    setOpenDialog(false);
  };

  return (
    <>
      <TableCell align="center" width="12%">
        <div className={classes.containerButton}>
          <Tooltip title={"Editar dados"}>
            <IconButton
              size="small"
              className={classes.button}
              onClick={handleEdit}
            >
              <EditNoteTwoToneIcon sx={{ color: blue[900], fontSize: 30 }} />
            </IconButton>
          </Tooltip>

          <Tooltip title={"Deletar dados"}>
            <IconButton
              size="small"
              className={classes.button}
              onClick={() => setOpenDialog(true)}
            >
              <DeleteForeverTwoToneIcon
                sx={{ color: blue[900], fontSize: 30 }}
              />
            </IconButton>
          </Tooltip>
        </div>

        <CustomDialogModal
          open={openDialog}
          title={"Excluir Registro"}
          maxWidth="md"
          children={
            <>
              <DialogTitle>{`Deseja realmente Excluir o item ${item} ?`}</DialogTitle>

              <CardFooter
                style={{
                  background: "#F0F8FF",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: 10,
                  }}
                >
                  <IconButton
                    color="primary"
                    size="small"
                    onClick={() => setOpenDialog(false)}
                  >
                    NÃO
                  </IconButton>

                  <div style={{ paddingLeft: 20 }}>
                    <IconButton
                      color="primary"
                      size="small"
                      aria-label="delete"
                      onClick={() => handleDelete()}
                    >
                      SIM
                    </IconButton>
                  </div>
                </div>
              </CardFooter>
            </>
          }
        />
      </TableCell>
    </>
  );
};

export default TemplateActionsButtons;
