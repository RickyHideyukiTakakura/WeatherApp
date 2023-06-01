import { useEffect, useState } from "react";
import { WeatherInfo } from "../interface/WeatherInfo";
import { getWeather } from "../services/weatherApi";

function useWeatherApi() {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>();

  useEffect(() => {
    async function fetchWeather() {
      const response = await getWeather();
      const data = await response.data;
      setWeatherInfo(data);
    }

    fetchWeather();
  }, []);

  return {
    weatherInfo,
  };
}

export default useWeatherApi;
