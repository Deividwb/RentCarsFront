import { makeStyles } from "@material-ui/styles";

export const carsStyles = makeStyles({
  containerButton: {
    display: "flex",
    justifyContent: "flex-start",
    // padding: 25,
  },
  modalButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
  imageContainerStyle: {
    display: "flex",
    flexWrap: "wrap",
  },
  imageItemStyle: {
    width: "150px",
    height: "150px",
    border: "2px dashed #ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
