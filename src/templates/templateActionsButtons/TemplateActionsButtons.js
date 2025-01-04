import React, { useState } from "react";
import { DialogTitle, TableCell, Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CardFooter } from "reactstrap";
import CustomDialogModal from "../../componentsLibrary/Modal/dialog/DialogModal";
import { templateActionsButtonsStyles } from "./style";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const TemplateActionsButtons = ({
  redirect,
  id,
  item,
  // getItem,
  deleteItem,
  className,
}) => {
  const classes = templateActionsButtonsStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);

  const handleEdit = () => {
    // dispatch(getItem({ id: id }));
    navigate(redirect);
  };

  const handleDelete = () => {
    dispatch(deleteItem({ id: id }));
    setOpenDialog(false);
  };

  return (
    <>
      <TableCell align="center" width="12%">
        <div className={className}>
          <Tooltip title={"Editar dados"}>
            <IconButton size="small" onClick={handleEdit}>
              <EditOutlinedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title={"Deletar dados"}>
            <IconButton size="small" onClick={() => setOpenDialog(true)}>
              <DeleteOutlineIcon />
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
