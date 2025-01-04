import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CustonTextField from "../../../../componentsLibrary/Inputs/TextField/CustonTextField";
import ReactDOM from "react-dom";
import { useCarsData, useCarsMessages } from "../../hooks/use-cars";
import { useCarsHandlers } from "../../hooks/use-cars/useCarsHandlers";
import { Button, Container, Typography, Input, Paper } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import CustomAutoComplete from "../../../../componentsLibrary/Inputs/autocomplete/CustomAutoComplete";
import { useAllDrivers } from "../../../Driver/hooks/use-drivers";
import { useDispatch } from "react-redux";
import { updateCarsData } from "../../store/cars/cars.store";
import { useParams } from "react-router-dom";
import { getByIdCars } from "../../store/cars/cars.sagas";
import { getAllDrivers } from "../../../Driver/store/drivers/drivers.sagas";
import { carsStyles } from "../../table/style";

const Cars = () => {
  const carsData = useCarsData();
  const dispatch = useDispatch();
  const allDrivers = useAllDrivers();
  const { id } = useParams();
  const messages = useCarsMessages();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const classes = carsStyles();

  const { handleBlur, handleChange, handleChangeAutocomplete } =
    useCarsHandlers(carsData);

  useEffect(() => {
    const nameInput = ReactDOM.findDOMNode(document.getElementById("brand"));
    if (nameInput) {
      nameInput.focus();
    }
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getByIdCars({ id: id }));
    }
    dispatch(getAllDrivers());
  }, [dispatch, id]);

  const handleFileChange = (e) => {
    //upload das imagens
    //"https://res.cloudinary.com/dcbanryd0/image/upload/v1735618157/cld-sample-5.jpg"

    const files = Array.from(e.target.files);

    setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...files]);

    let arrayFiles = selectedFiles.map(
      (file) => "C://Users/mi212/Downloads/" + file.name
    );
    let arrayImagens = files.map(
      (file) => "C://Users/mi212/Downloads/" + file.name
    );

    dispatch(updateCarsData({ imageUrls: [...arrayFiles, ...arrayImagens] }));
  };

  const findData = (array, field, value, showField) => {
    const defaultOption = {
      id: "",
      [showField]: "",
      name: "",
    };

    const data =
      array?.length && (value || value === 0)
        ? array.find((result) => result[field] === value) || defaultOption
        : "";

    const formatData = {
      id: data[field],
      name: showField ? data[showField] : data.name,
    };

    return formatData;
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Container maxWidth="md">
              <Typography variant="h4" gutterBottom>
                Carregar Fotos
              </Typography>
              <Input
                type="file"
                accept="image/*"
                id="imageUrls"
                name="imageUrls"
                style={{ display: "none" }}
                onChange={handleFileChange}
                inputProps={{ multiple: true }}
              />
              <label htmlFor="imageUrls">
                <Button
                  variant="contained"
                  component="span"
                  color="primary"
                  startIcon={<PhotoCameraIcon />}
                >
                  Selecione fotos
                </Button>
              </label>
              <Paper
                elevation={3}
                style={{ marginTop: "20px", padding: "10px" }}
              >
                <Typography variant="h6" gutterBottom>
                  Fotos Selecionadas:
                </Typography>
                <div className={classes.imageContainerStyle}>
                  {!id && selectedFiles.length === 0 && (
                    <div className={classes.imageItemStyle}>
                      <Typography variant="body2">
                        Nenhuma imagem selecionada
                      </Typography>
                    </div>
                  )}

                  {!id &&
                    selectedFiles.map((file, index) => (
                      <div key={index} className={classes.imageItemStyle}>
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Imagem ${index + 1}`}
                          className={classes.imageStyle}
                        />
                      </div>
                    ))}

                  {id &&
                    carsData.imageUrls.length &&
                    carsData.imageUrls.map((file, index) => (
                      <div key={index} className={classes.imageItemStyle}>
                        <img
                          src={file}
                          alt={`Imagem ${index + 1}`}
                          className={classes.imageStyle}
                        />
                      </div>
                    ))}
                </div>
              </Paper>
            </Container>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustonTextField
            id="brand"
            name="brand"
            label="Marca/Modelo"
            value={carsData.brand}
            handleChange={handleChange()}
            handleBlur={handleBlur()}
            required
            error={!!messages.brand}
            helperText={messages.brand}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CustomAutoComplete
            id="id_Driver"
            name="id_Driver"
            label="Motorista"
            value={findData(allDrivers, "id", carsData.id_Driver)}
            options={allDrivers}
            handleChange={handleChangeAutocomplete("id_Driver")}
            // handleBlur={handleBlurAutocomplete()}
            // required
            error={!!messages.id_Driver}
            helperText={messages.id_Driver}
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <CustonTextField
            id="modelYear"
            name="modelYear"
            label="Ano"
            value={carsData.modelYear}
            handleChange={handleChange()}
            handleBlur={handleBlur()}
            required
            type="number"
            error={!!messages.modelYear}
            helperText={messages.modelYear}
            focus={true}
          />
        </Grid>

        <Grid item xs={12} sm={10}>
          <CustonTextField
            id="plate"
            name="plate"
            label="Placa"
            value={carsData.plate}
            handleChange={handleChange()}
            handleBlur={handleBlur()}
            required
            error={!!messages.plate}
            helperText={messages.plate}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Cars;
