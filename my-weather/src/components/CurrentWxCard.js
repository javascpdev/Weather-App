import React from 'react';
import { CssBaseline, Container, Paper, Typography } from '@material-ui/core';

const CurrentWxCard = (props) => {
    // console.log(props)
    return (
        <div>
            {props.data.map(info => {
                let weather = info.weather.icon
                // console.log(weather)
                return ( 
                    <div>
                        <React.Fragment>
                            <CssBaseline/>
                            <Container>
                                <Paper>
                                    <div className="weather-icon">
                                        <img src={`https://www.weatherbit.io/static/img/icons/${weather}.png`} alt="wx-icon"/> 
                                    </div>
                                    <Typography variant="h2">{info.city_name}, {info.state_code}</Typography>
                                    <Typography>Current Temp: {info.temp}F</Typography>
                                    <Typography>Dewpoint: {Math.round(info.dewpt)}F</Typography>
                                    <Typography>Relative Humidity: {info.rh}%</Typography>
                                    <Typography>Wind: {info.wind_spd}MPH out of the {info.wind_cdir}</Typography>
                                </Paper>
                            </Container>
                        </React.Fragment>
                    </div>
                )
            })}
        </div>
    );
};

export default CurrentWxCard;