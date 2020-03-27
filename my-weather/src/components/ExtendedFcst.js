import React, { useState, useEffect } from "react";
import axios from "axios";
import { usePosition } from "use-position";

const ExtendedFcst = () => {
  const [extFcst, setExtFcst] = useState([]);
  const { latitude, longitude, error } = usePosition();

  useEffect(() => {
    if (latitude && longitude && !error) {
      axios
        .get(
          `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=cd48f97735b04b7289b16e1613d1d2f1&units=i`
        )
        .then(res => {
          console.log(res);
          setExtFcst(res.data.data);
        })
        .catch(error => console.log(error));
    }
  });

  return (
    <div>
      <h1>Extended Forecast!</h1>
    </div>
  );
};

export default ExtendedFcst;
