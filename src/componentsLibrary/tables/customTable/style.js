import { makeStyles } from "@material-ui/styles";

export const tableStyles = makeStyles({
  // Classe hoverRow existente
  hoverRow: {
    "&:hover": {
      // border: "1px solid #ced4da",
      padding: "0.375rem 0.75rem",
      fontSize: "1rem",
      lineHeight: "1.5",
      color: "#495057",
      borderRadius: "0.25rem",
      transition: "all 0.3s ease-in-out",
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 0 15px #80bdff",
      backgroundColor: "#F0F8FF !important",
    },
  },
  // Nova classe para a animação LED
  led: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    borderRadius: "0.25rem",
    background:
      "linear-gradient(90deg, rgba(0,123,255,0) 0%, rgba(0,123,255,1) 50%, rgba(0,123,255,0) 100%)",
    animation: "pulsate-border 2s infinite",
  },
  // Definir a animação LED
  "@keyframes run-around": {
    "0%": {
      transform: "translateX(-100%)",
    },
    "100%": {
      transform: "translateX(100%)",
    },
  },
});
