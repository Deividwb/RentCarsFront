import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import ReactDOM from "react-dom";

export default function CustonTextField({
  id,
  name,
  label,
  value,
  handleChange,
  type,
  disabled,
  required = false,
  startIcon,
  error,
  helperText,
  focus
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    const nameInput = ReactDOM.findDOMNode(document.getElementById(focus));
    if (nameInput) {
      nameInput.focus();
    }
  }, []);

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
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        variant="standard"
        disabled={false}
        placeholder
        type={type}
        required={required}
        style={textFieldStyle}
        onFocus={handleFocus}
        startIcon={startIcon}
        error={error}
        helperText={helperText}
      />
    </>
  );
}
