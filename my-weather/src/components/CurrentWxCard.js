import React from "react";
import { CssBaseline, Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  mainCont: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage:
      "url(https://marketplace.canva.com/MADEbjXFeOw/1/thumbnail_large/canva-empty-blue-sky-as-weather-background-MADEbjXFeOw.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "0 auto"
  },
  paper: {
    padding: theme.spacing(3, 2),
    width: 400,
    height: 350,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)"
  }
}));

const CurrentWxCard = ({ data }) => {
  const classes = useStyles();
  return (
    <div>
      {data.map(info => {
        let weather = info.weather.icon;
        return (
          <div>
            <React.Fragment>
              <CssBaseline />
              <Container
                className={classes.mainCont}
                maxWidth="100%"
                style={{ height: "100vh", width: "100vw" }}
              >
                <Paper className={classes.paper}>
                  <div className="weather-icon">
                    <img
                      src={`https://www.weatherbit.io/static/img/icons/${weather}.png`}
                      alt="wx-icon"
                    />
                  </div>
                  <Typography variant="h2">
                    {info.city_name}, {info.state_code}
                  </Typography>
                  <Typography>Current Temp: {info.temp}F</Typography>
                  <Typography>Dewpoint: {Math.round(info.dewpt)}F</Typography>
                  <Typography>Relative Humidity: {info.rh}%</Typography>
                  <Typography>
                    Wind: {info.wind_spd}MPH out of the {info.wind_cdir}
                  </Typography>
                </Paper>
              </Container>
            </React.Fragment>
          </div>
        );
      })}
    </div>
  );
};

export default CurrentWxCard;
