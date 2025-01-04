import React, { useCallback, useEffect, useState } from "react";
import RenderIf from "../../../utils/renderIf/RenderIf";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import CustomContainedButton from "../../../componentsLibrary/buttons/CustomContainedButton";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { baseUrlRoute } from "../utils/cars.constants";
import { deleteCars, getAllCars } from "../store/cars/cars.sagas";
import { useAllCars } from "../hooks/use-cars";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TemplateActionsButtons from "../../../templates/templateActionsButtons/TemplateActionsButtons";
import { carsStyles } from "./style";
import { clearCars } from "../store/cars/cars.store";

const CarsTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allCars = useAllCars();
  const classes = carsStyles();

  const [isMouseOverImage, setIsMouseOverImage] = useState(false);
  const [showArrows, setShowArrows] = useState(false); // Novo estado para controlar a visibilidade das setas

  const initialImageIndices =
    allCars &&
    allCars?.reduce((acc, car) => {
      acc[car.id] = 0;
      return acc;
    }, {});

  const [currentImageIndices, setCurrentImageIndices] =
    useState(initialImageIndices);

  const nextImage = (id, maxIndex) => {
    setCurrentImageIndices((prevState) => ({
      ...prevState,
      [id]: prevState[id] < maxIndex ? prevState[id] + 1 : prevState[id],
    }));
  };

  const prevImage = (id) => {
    setCurrentImageIndices((prevState) => ({
      ...prevState,
      [id]: prevState[id] > 0 ? prevState[id] - 1 : prevState[id],
    }));
  };

  const setLoadAllCars = useCallback(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  useEffect(() => {
    setLoadAllCars();
    return () => dispatch(clearCars());
  }, [dispatch, setLoadAllCars]);

  return (
    <>
      <RenderIf condition={true}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: 5,
          }}
        >
          <CustomContainedButton
            label="Incluir"
            size="large"
            handleClick={() => navigate(`/${baseUrlRoute}/new`)}
            startIcon={<AddIcon />}
          />
        </div>
        <Box>
          <Paper
            sx={{
              width: "100%",
              height: "100vh",
              overflow: "auto",
              padding: "40px 0 20% 50px",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, sm: 3, md: 4 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {allCars &&
                  allCars?.map((car, index) => (
                    <Grid xs={2} sm={4} md={4} lg={4} key={index}>
                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          className={`image-container ${
                            isMouseOverImage ? "show-nav" : ""
                          } nav-container`} // Adicione a classe nav-container aqui
                          component="img"
                          alt="car image"
                          height="160"
                          // image={car.imageUrls[index]}
                          image={
                            car.imageUrls[currentImageIndices[car.id]] ??
                            car.imageUrls[index]
                          }
                          onMouseEnter={() => {
                            setIsMouseOverImage(true);
                            setShowArrows(true);
                          }}
                          onMouseLeave={() => {
                            setIsMouseOverImage(false);
                            setShowArrows(false);
                          }}
                        />
                        <Button
                          onClick={() => prevImage(car?.id)}
                          className={`nav-button prev ${
                            showArrows ? "show-nav" : ""
                          }`}
                          disabled={currentImageIndices[car.id] === 0}
                        >
                          {/* <ArrowBackIosIcon fontSize="large" /> */}
                          <ArrowBackIosIcon />
                        </Button>
                        <Button
                          onClick={() => {
                            const nextIndex = currentImageIndices[car.id] + 1;
                            if (nextIndex < car.imageUrls.length) {
                              nextImage(car.id, car.imageUrls.length - 1);
                            } else {
                              setCurrentImageIndices((prevState) => ({
                                ...prevState,
                                [car.id]: car.imageUrls.length - 1,
                              }));
                            }
                          }}
                          className={`nav-button next ${
                            showArrows ? "show-nav" : ""
                          }`}
                          disabled={
                            currentImageIndices[car.id] ===
                            car.imageUrls.length - 1
                          }
                        >
                          <ArrowForwardIosIcon />
                        </Button>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {car?.brand}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {`Ano: ${car?.modelYear}`}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {"Placa"} <b>{`: ${car?.plate}`}</b>
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {"Motorista"} <b>{`: ${car?.driverName}`}</b>
                          </Typography>
                        </CardContent>

                        <TemplateActionsButtons
                          className={classes.containerButton}
                          redirect={`/${baseUrlRoute}/${car.id}/edit`}
                          id={car.id}
                          item={car.brand}
                          // getItem={getByIdCars}
                          deleteItem={deleteCars}
                        />

                        {/* <CardActions>
                        <Button size="small">Detalhes</Button>
                        <Button
                          size="small"
                          onClick={() => handleDelete(car?.id)}
                        >
                          excluir
                        </Button>
                      </CardActions> */}
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            </Box>
          </Paper>
        </Box>
      </RenderIf>
    </>
  );
};

export default CarsTable;
