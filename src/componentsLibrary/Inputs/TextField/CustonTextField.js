import React, { useState } from "react";

import TextField from "@mui/material/TextField";

export default function CustonTextField({
  id,
  label,
  disabled,
  required,
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

  //pulsação, ficou top

  //   const textFieldStyle = {
  //     // border: '1px solid #ced4da',
  //     // padding: "0.375rem 0.75rem",
  //     // fontSize: "1rem",
  //     // lineHeight: "1.5",
  //     // color: "#495057",
  //     // borderRadius: "0.25rem",
  //     // transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
  //     // borderColor: isFocused ? "#80bdff" : "#ced4da",
  //     // boxShadow: isFocused ? "0 0 0 0.2rem rgba(0, 123, 255, 0.25)" : "none",
  //     // border: "1px solid #ced4da",

  //     // padding: "0.375rem 0.75rem",
  //     // fontSize: "1rem",
  //     // lineHeight: "1.5",
  //     // color: "#495057",
  //     // borderRadius: "0.25rem",
  //     // transition: "all 0.3s ease-in-out",
  //     // position: "relative",
  //     // overflow: "hidden",
  //     // ...(isFocused && {
  //     //   borderColor: "#80bdff",
  //     //   boxShadow: "0 0 9px #80bdff",
  //     //   animation: "pulsate-border 1s infinite",
  //     // }),

  //     // border: "1px solid #ced4da",
  //     padding: "0.375rem 0.75rem",
  //     fontSize: "1rem",
  //     lineHeight: "1.5",
  //     color: "#495057",
  //     borderRadius: "0.25rem",
  //     transition: "all 0.3s ease-in-out",
  //     position: "relative",
  //     overflow: "hidden",
  //     boxShadow: isFocused ? "0 0 5px #80bdff" : "none",
  //     animation: isFocused ? "pulsate-border 2s infinite" : "none",
  //   };

  //   const css = `
  //   @keyframes pulsate-border {
  //     0% {
  //       box-shadow: 0 0 0 0px rgba(0, 123, 255, 0.4);
  //     }
  //     50% {
  //       box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
  //     }
  //     100% {
  //       box-shadow: 0 0 0 0px rgba(0, 123, 255, 0.4);
  //     }
  //   }
  // `;

  const textFieldStyle = {
    border: "1px solid #ced4da",
    padding: "0.375rem 0.75rem",
    fontSize: "1rem",
    lineHeight: "1.5",
    color: "#495057",
    borderRadius: "0.25rem",
    transition: "all 0.3s ease-in-out",
    position: "relative",
    overflow: "hidden",
    boxShadow: isFocused ? "0 0 5px #80bdff" : "none",
  };

  const lightStyle = {
    position: "absolute",
    content: "",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    borderRadius: "0.25rem",
    background: isFocused
      ? "linear-gradient(90deg, rgba(0, 123, 255, 0) 0%, rgba(0, 123, 255, 0.4) 50%, rgba(0, 123, 255, 0) 100%)"
      : "none",
    animation: isFocused ? "run-around 2s infinite linear" : "none",
  };

  const css = `
  @keyframes run-around {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

  return (
    <div>
      <style>{css}</style>
      <div style={textFieldStyle}>
        <div style={lightStyle}></div>
        <TextField
          id={id}
          label={label}
          variant="standard"
          disabled={false}
          placeholder
          InputLabelProps={{
            shrink: true,
          }}
          type
          helperText={helperText}
          required
          error={error}
          style={textFieldStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
}
