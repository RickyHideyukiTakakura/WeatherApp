import useWeatherApi from "../../hooks/useWeatherApi";
import { InfoWeekWeather } from "../InfoWeekWeather";
import * as S from "./styles";

export function ListWeekWeather() {
  const { weatherInfo } = useWeatherApi();

  if (!weatherInfo) {
    return <div>Loading...</div>;
  }

  if (!weatherInfo.forecast.forecastday) {
    return <div>No forecast available</div>;
  }

  return (
    <S.ListWeekWeather>
      <InfoWeekWeather
        title={"Today"}
        image={weatherInfo.forecast.forecastday[0].day.condition.icon}
        max={weatherInfo.forecast.forecastday[0].day.maxtemp_c}
        min={weatherInfo.forecast.forecastday[0].day.mintemp_c}
      />
      <InfoWeekWeather
        title={"Tomorrow"}
        image={weatherInfo.forecast.forecastday[1].day.condition.icon}
        max={weatherInfo.forecast.forecastday[1].day.maxtemp_c}
        min={weatherInfo.forecast.forecastday[1].day.mintemp_c}
      />
      <InfoWeekWeather
        title={"After Tomorrow"}
        image={weatherInfo.forecast.forecastday[2].day.condition.icon}
        max={weatherInfo.forecast.forecastday[2].day.maxtemp_c}
        min={weatherInfo.forecast.forecastday[2].day.mintemp_c}
      />
    </S.ListWeekWeather>
  );
}
