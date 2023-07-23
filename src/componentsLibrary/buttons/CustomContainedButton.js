import React from "react";
import Button from "@mui/material/Button";
import { buttonStyles } from "./style";

const CustomContainedButton = ({ color, handleClick, startIcon, label }) => {
  const classes = buttonStyles();

  return (
    <>
      <Button
        variant="contained"
        color={color}
        size="large"
        startIcon={startIcon}
        disabled={false}
        className={classes.paperButton}
        onClick={handleClick}
      >
        {label}
      </Button>
    </>
  );
};

export default CustomContainedButton;
