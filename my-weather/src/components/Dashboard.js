// Core Imports
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Component Imports
import CurrentWxCard from './CurrentWxCard';

const Dashboard = () => {
    const [currentWx, setCurrentWx] = useState([]);

    window.onload = () => {
        if(navigator.geolocation.getCurrentPosition) {
            navigator.geolocation.getCurrentPosition(function(position) {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                let key = 'cd48f97735b04b7289b16e1613d1d2f1'

                axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${key}`)
                .then(res => {
                console.log(res)
                setCurrentWx(res.data.data)
                })   
            })
        }
    }
  
    return (
        <div>
            <div>
                {currentWx.map(info => {
                    return (
                        <CurrentWxCard 
                        data={currentWx}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default Dashboard;