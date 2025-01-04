import React from "react";
import CustomDialogModal from "../../../componentsLibrary/Modal/dialog/DialogModal";
import CustomContainedButton from "../../../componentsLibrary/buttons/CustomContainedButton";
import { useState } from "react";
import { DialogTitle } from "@mui/material";
import { CardFooter } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useSubmit } from "../hooks/use-submit/carsSubmit";
import SaveIcon from "@mui/icons-material/Save";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import IconButton from "@mui/material/IconButton";

const CarsSubmit = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();
  const { onCarsSubmit } = useSubmit();

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
                    onClick={() => handleClose()}
                  >
                    SIM
                  </IconButton>
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
            handleClick={onCarsSubmit}
            startIcon={<SaveIcon />}
          />
        </div>
      </div>
    </>
  );
};

export default CarsSubmit;
