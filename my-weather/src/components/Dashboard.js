import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Component Imports
import CurrentWxCard from './CurrentWxCard';

const Dashboard = () => {
    const [currentWx, setCurrentWx] = useState([]);
    const [userLocation, setUserLocation] = useState({
        postal_code: ''
    });

    const handleLocationChange = event => {
        event.preventDefault();
        setUserLocation({[event.target.name]: event.target.value})
    };

    // function cToF(celsius) {
    //     let cTemp = celsius
    //     let cToFahr = cTemp * 9 / 5 + 32;
    //     let message = cTemp +'\xB0C is' + cToFahr + ' \xB0F.';
    //         console.log(message)
    // }

    const handleSubmit = event => {
        event.preventDefault();
        axios.get(`https://api.weatherbit.io/v2.0/current?postal_code=${userLocation.postal_code}&key=cd48f97735b04b7289b16e1613d1d2f1&units=i`)
        .then(res => {
            console.log(res)
            setCurrentWx(res.data.data)
        })   
    }
    console.log(currentWx)
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                label="Zip Code"
                name="postal_code"
                type="text"
                value={userLocation.postal_code} 
                onChange={handleLocationChange}
                />
            <button type="Submit">Get Weather</button>
            </form>
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