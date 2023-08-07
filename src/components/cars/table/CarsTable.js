import React from "react";

import RenderIf from "../../../utils/renderIf/RenderIf";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import CustomContainedButton from "../../../componentsLibrary/buttons/CustomContainedButton";
import { useNavigate } from "react-router-dom";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import KwidImg from "../../../assets/images/kwid.jpg";

const CarsTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const setLoadAllDrivers = useCallback(() => {
  //   dispatch(getAllDrivers());
  // }, [dispatch]);

  // useEffect(() => {
  //   setLoadAllDrivers();
  //   return () => dispatch(clearDrivers());
  // }, [dispatch, setLoadAllDrivers]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

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
            // handleClick={() => navigate(`/${baseUrlRoute}/new`)}
            startIcon={<AddIcon />}
          />
        </div>
        <Box
        
        >
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
                spacing={{ xs: 2, sm: 3, md: 4,  }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {Array.from(Array(12)).map((_, index) => (
                  <Grid xs={2} sm={4} md={4} lg={4} key={index}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="160"
                        image={KwidImg}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Kwid
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Detalhes</Button>
                        <Button size="small">excluir</Button>
                      </CardActions>
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
