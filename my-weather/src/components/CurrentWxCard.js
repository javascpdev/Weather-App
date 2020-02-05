import React from 'react';

const CurrentWxCard = (props) => {
    console.log(props)
    return (
        <div>
            {props.data.map(info => {
                return (
                    <div>
                        <h1>Location: {info.city_name}, {info.state_code}, {info.country_code}</h1>
                        <p>Current Temp: {info.temp}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default CurrentWxCard;