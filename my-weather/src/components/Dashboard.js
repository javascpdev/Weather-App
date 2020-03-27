import React, { useState, useEffect } from "react";
import axios from "axios";
import { usePosition } from "use-position";

// Component Imports
import CurrentWxCard from "./CurrentWxCard";

const Dashboard = () => {
  const [currentWx, setCurrentWx] = useState([]);
  const { latitude, longitude, error } = usePosition();

  useEffect(() => {
    if (latitude && longitude && !error) {
      axios
        .get(
          `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=cd48f97735b04b7289b16e1613d1d2f1&units=i`
        )
        .then(res => {
          console.log(res);
          setCurrentWx(res.data.data);
        });
    }
  }, [latitude, longitude, error]);

  return (
    <div>
      <div>
        {currentWx.map(info => {
          return <CurrentWxCard data={currentWx} key={info.datetime} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
