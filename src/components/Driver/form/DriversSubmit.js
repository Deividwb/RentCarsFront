import React from "react";
import CustomDialogModal from "../../../componentsLibrary/Modal/dialog/DialogModal";
import CustomContainedButton from "../../../componentsLibrary/buttons/CustomContainedButton";
import { useState } from "react";
import { DialogTitle } from "@mui/material";
import { CardFooter } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useSubmit } from "../hooks/use-submit/driversSubmit";
import SaveIcon from "@mui/icons-material/Save";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

const DriversSubmit = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();
  const { onDriversSubmit } = useSubmit();

  const handleOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <>
      <CustomDialogModal
        open={openDialog}
        title={"Cancelar"}
        maxWidth="md"
        children={
          <>
            <DialogTitle>{"Deseja realmente Cancelar?"}</DialogTitle>

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
                <CustomContainedButton
                  label="Não"
                  color={"text"}
                  size="small"
                  handleClick={() => setOpenDialog(false)}
                />
                <div style={{ paddingLeft: 30 }}>
                  <CustomContainedButton
                    label="Sim"
                    color={"text"}
                    size="small"
                    handleClick={handleClose}
                  />
                </div>
              </div>
            </CardFooter>
          </>
        }
      />

      <div style={{ display: "flex", justifyContent: "flex-end", padding: 15 }}>
        <CustomContainedButton
          color="inherit"
          label="Cancelar"
          handleClick={handleOpen}
          startIcon={
            <>
              <KeyboardReturnIcon />
            </>
          }
        />

        <div style={{ paddingLeft: 50 }}>
          <CustomContainedButton
            label="Salvar"
            handleClick={onDriversSubmit}
            startIcon={<SaveIcon />}
          />
        </div>
      </div>
    </>
  );
};

export default DriversSubmit;
