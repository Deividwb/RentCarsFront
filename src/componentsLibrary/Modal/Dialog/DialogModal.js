import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const modalDirection = {
  1: "up",
  2: "down",
  3: "right",
  4: "left",
};

const getRandomDirection = () => {
  const randomNum =
    Math.floor(Math.random() * Object.keys(modalDirection).length) + 1;
  return modalDirection[randomNum];
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction={getRandomDirection()} ref={ref} {...props} />;
});

const CustomDialogModal = ({ open, setOpenModal, title, children }) => {
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{ fontWeight: 700 }}>{title}</DialogTitle>

        {children}
      </Dialog>
    </div>
  );
};

export default CustomDialogModal;
