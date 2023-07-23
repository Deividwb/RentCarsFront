import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export default function CustonTextField({
  id,
  name,
  label,
  type,
  disabled,
  required = false,
  error,
  helperText,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const textFieldStyle = {
    padding: "0.375rem 0.175rem",
    fontSize: "1rem",
    lineHeight: "1.5",
    color: "#495057",
    borderRadius: "0.25rem",
    transition: "all 0.3s ease-in-out",
    position: "relative",
    overflow: "hidden",
    ...(isFocused && {
      borderColor: "#80bdff",
      boxShadow: "0 0 5px #80bdff",
      animation: "pulsate-border 5s infinite",
    }),
    width: "100%",
  };

  const css = `
    @keyframes pulsate-border {
      0% {
        box-shadow: 0 0 0 0px rgba(0, 123, 255, 0.4);
      }
      50% {
        box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
      }
      100% {
        box-shadow: 0 0 0 0px rgba(0, 123, 255, 0.4);
      }
    }
  `;

  return (
    <>
      <style>{css}</style>
      <TextField
        id={id}
        name={name}
        label={label}
        variant="standard"
        disabled={false}
        placeholder
        type={type}
        helperText={helperText}
        required={required}
        error={error}
        style={textFieldStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </>
  );
}
