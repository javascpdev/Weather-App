import React from 'react';

const CurrentWxCard = (props) => {
    console.log(props)
    return (
        <div>
            {props.data.map(info => {
                return (
                    <div>
                        <h1>{info.city_name}</h1>
                    </div>
                )
            })}
        </div>
    );
};

export default CurrentWxCard;