import React, { useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";

const CustomAutoComplete = ({
  id,
  name,
  label,
  options,
  value,
  handleChange,
  required,
  setOptionDefault = true,
  clearUndefinedData = true,
}) => {
  const defaultItemData = { id: null, fieldName: null };

  useEffect(() => {
    if (options?.length === 1 && required && !value?.id && setOptionDefault) {
      handleChange({ target: { value: options[0], name } }, options[0]);
    }

    if (options?.length && value?.id === "" && clearUndefinedData) {
      handleChange(
        { target: { value: defaultItemData, name } },
        defaultItemData
      );
    }
  }, [options, required]);

  return (
    <Autocomplete
      disablePortal
      id={id}
      name={name}
      value={value}
      options={options}
      getOptionLabel={(option) => option.name ?? ""}
      getOptionValue={(option) => option.id}
      renderOption={(props, option) => (
        <li {...props}>
          {/* {option.label} */}
          <div>{option.name}</div>
          {/* Adicione a propriedade adicional que você deseja exibir */}
        </li>
      )}
      onChange={handleChange}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
      required={required}
    />
  );
};

export default CustomAutoComplete;

// import React, { Fragment, useEffect } from "react";

// import { CircularProgress, TextField } from "@material-ui/core";
// // import Autocomplete from "@material-ui/lab/Autocomplete";
// import PropTypes from "prop-types";
// import { Autocomplete } from "@mui/material";

// // import { useStyles } from "./style";
// // import useFormChanged from "../../../hooks/useFormChanged/useFormChanged";
// // import i18n from "../../../i18n";
// // import { defaultItemData } from "../../../utils/constants";
// // import OctoHtmlTooltip from "../../tooltip/OctoHtmlTooltip";

// const CustomAutoComplete = ({
//   autoFocus,
//   id,
//   isOpen,
//   name,
//   onOpen,
//   onClose,
//   handleChange,
//   handleBlur,
//   value,
//   options,
//   loading,
//   label,
//   disabled,
//   disabledTotal,
//   variant,
//   customClass,
//   customClassLabel,
//   error,
//   required,
//   helperText,
//   multiple,
//   buttons,
//   tooltipDelay,
//   tooltipTitle,
//   tooltipContent,
//   optionDisabled,
//   onFocus,
//   onMouseEnter,
//   onMouseLeave,
//   setOptionDefault,
//   clearUndefinedData,
//   setFormChanged,
// }) => {
//   // const classes = useStyles();
//   // const defaultItemData = {id: null, fieldName: null}
//   const defaultItemData = { id: null, name: null };
//   // const { setFormHasChanged } = useFormChanged();

//   useEffect(() => {
//     if (options?.length === 1 && required && !value?.id && setOptionDefault) {
//       handleChange({ target: { value: options[0], name } }, options[0]);
//     }

//     if (options?.length && value?.id === "" && clearUndefinedData) {
//       handleChange(
//         { target: { value: defaultItemData, name } },
//         defaultItemData
//       );
//     }
//   }, [options, required]);

//   return (
//     // <OctoHtmlTooltip
//     //   enterDelay={tooltipDelay}
//     //   content={
//     //     tooltipContent && (
//     //       <>
//     //         <strong>{tooltipTitle ? tooltipTitle : label}</strong>
//     //         <br />
//     //         <p>{tooltipContent}</p>
//     //       </>
//     //     )
//     //   }
//     // >
//     <div>
//       <Autocomplete
//         id={id}
//         multiple={multiple}
//         fullWidth
//         open={isOpen}
//         disabled={disabledTotal}
//         name={name}
//         onOpen={onOpen}
//         onClose={onClose}
//         value={value}
//         options={options}
//         getOptionDisabled={optionDisabled}
//         getOptionSelected={(option) =>
//           // option.fieldName ? option.fieldName : ""
//           option.name ? option.name : ""
//         }
//         // getOptionLabel={(option) => (option.fieldName ? option.fieldName : "")}
//         getOptionLabel={(option) => (option.name ? option.name : "")}
//         onChange={handleChange}
//         // onBlur={(e) => {
//         //   setFormChanged && setFormHasChanged(true);
//         //   handleBlur && handleBlur(e);
//         // }}
//         onFocus={onFocus}
//         onMouseEnter={onMouseEnter}
//         onMouseLeave={onMouseLeave}
//         loading={loading}
//         // openText={i18n.t("autocompleteSelect.attributes.open")}
//         // closeText={i18n.t("autocompleteSelect.attributes.close")}
//         // clearText={i18n.t("autocompleteSelect.attributes.clear")}
//         // loadingText={i18n.t("autocompleteSelect.attributes.loading")}
//         classes={
//           {
//             // option: classes.fontSize,
//             // input: classes.input,
//             // root: classes.root,
//           }
//         }
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             label={label}
//             autoFocus={autoFocus}
//             required={required}
//             error={error}
//             helperText={helperText}
//             variant={variant}
//             // className={disabled ? classes.disabledClass : customClass}
//             // InputLabelProps={{
//             //   className: ${customClassLabel} ${classes.fontSize},
//             // }}
//             InputProps={{
//               ...params.InputProps,
//               endAdornment: (
//                 <Fragment>
//                   {loading ? (
//                     <CircularProgress color="inherit" size={20} />
//                   ) : null}
//                   {/* <div id="buttons" className={classes.buttons}> */}
//                   <div id="buttons">{buttons}</div>
//                   {params.InputProps.endAdornment}
//                 </Fragment>
//               ),
//               // className: ${customClassLabel} ${classes.fontSize},
//             }}
//           />
//         )}
//         renderOption={(option) => {
//           return (
//             <div>
//               <span style={{ fontWeight: option?.isBold ? 900 : 400 }}>
//                 {<>{option?.fieldName}</>}
//               </span>
//             </div>
//           );
//         }}
//       />
//     </div>
//     // </OctoHtmlTooltip>
//   );
// };

// CustomAutoComplete.propTypes = {
//   id: PropTypes.string,
//   multiple: PropTypes.bool,
//   isOpen: PropTypes.bool,
//   name: PropTypes.string,
//   onOpen: PropTypes.bool,
//   onClose: PropTypes.bool,
//   handleChange: PropTypes.func,
//   handleBlur: PropTypes.func,
//   onFocus: PropTypes.func,
//   onMouseEnter: PropTypes.func,
//   onMouseLeave: PropTypes.func,
//   value: PropTypes.any,
//   options: PropTypes.array,
//   loading: PropTypes.bool,
//   label: PropTypes.string,
//   required: PropTypes.bool,
//   error: PropTypes.bool,
//   disabled: PropTypes.bool,
//   disabledTotal: PropTypes.bool,
//   variant: PropTypes.string,
//   customClass: PropTypes.string,
//   customClassText: PropTypes.string,
//   customClassLabel: PropTypes.string,
//   helperText: PropTypes.string,
//   buttons: PropTypes.any,
//   autoFocus: PropTypes.any,
//   tooltipDelay: PropTypes.number,
//   tooltipTitle: PropTypes.string,
//   tooltipContent: PropTypes.node,
//   optionDisabled: PropTypes.func,
//   setOptionDefault: PropTypes.bool,
//   setFormChanged: PropTypes.bool,
// };

// CustomAutoComplete.defaultProps = {
//   multiple: false,
//   disabled: false,
//   disabledTotal: false,
//   variant: "standard",
//   options: [],
//   tooltipDelay: 5000,
//   setOptionDefault: true,
//   clearUndefinedData: true,
//   setFormChanged: true,
// };

// export default CustomAutoComplete;
