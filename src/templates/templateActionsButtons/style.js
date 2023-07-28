import { makeStyles } from "@material-ui/styles";

export const templateActionsButtonsStyles = makeStyles({
  containerButton: {
    display: "flex",
    justifyContent: "space-evenly",

 
  },
  button: {
    boxShadow: "3px 1.5px 4px rgba(0, 0, 50, 4.5)",
    transition: "box-shadow 0.3s ease-in-out",

    "&:hover": {
      boxShadow: "2px 1.5px 4px rgba(0, 0, 0, 0.6)",
    },
  },
});
