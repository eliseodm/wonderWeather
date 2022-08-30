import { useState, useEffect } from "react";
import { instanceOpenWeatherMap } from "../axios";

const OPENWEATHERMAP_APIKEY = "802b50500b2e8e9b6499ebd055e046c1";

const useTemperatureInfo = (lat, lon) => {
  const [loading, setLoading] = useState(true);
  const [temperatureInfo, setTemperatureInfo] = useState([]);

  const kelvinToCelcius = (temp) => temp - 273.15;

  const fetchWeatherInfo = async () => {
    await instanceOpenWeatherMap
      .get(
        `/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHERMAP_APIKEY}`
      )
      .then((response) => {
        const mainInfo = response.data.main;
        const { weather } = response.data;
        
        setTemperatureInfo({
          temperature: kelvinToCelcius(mainInfo.temp),
          minTemp: kelvinToCelcius(mainInfo.temp_min),
          maxTemp: kelvinToCelcius(mainInfo.temp_max),
          icon: weather[0].icon,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  };
  
  useEffect(() => {
    if (lat && lon) fetchWeatherInfo();
  }, [lat, lon]);

  return { loading, temperatureInfo };
};

export default useTemperatureInfo;