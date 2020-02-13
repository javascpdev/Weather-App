import React from 'react';

const CurrentWxCard = (props) => {
    console.log(props)
    return (
        <div>
            {props.data.map(info => {
                let weather = info.weather.icon
                console.log(weather)
                return ( 
                    <div>
                        <div class="weather-icon">
                            <img src={`../../icons/._${weather}.png`} alt="wx-icon"/>
                        </div>
                        <h1>Location: {info.city_name}, {info.state_code}, {info.country_code}</h1>
                        <p>Current Temp: {info.temp}F</p>
                        <p>Dewpoint: {info.dewpt}F</p>
                        <p>Relative Humidity: {info.rh}%</p>
                        <p>Wind: {info.wind_spd}MPH out of the {info.wind_cdir}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default CurrentWxCard;