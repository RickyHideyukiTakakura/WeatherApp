import { useState } from "react";
import airQualityIcon from "./assets/leaf.svg";
import sunTimeIcon from "./assets/sun-time.svg";
import { AirQuality } from "./components/AirQuality";
import Card from "./components/Card";
import { CardTemp } from "./components/CardTemp";
import { ListWeekWeather } from "./components/ListWeekWeather";
import { SunTime } from "./components/SunTime";
import useWeatherApi from "./hooks/useWeatherApi";
import * as S from "./styles/global";

function App() {
  const { weatherInfo } = useWeatherApi();
  const [currentTime, setCurrentTime] = useState<string>("00:00");
  const aSecondInMiliseconds = 1000;

  setInterval(() => {
    setCurrentTime(
      new Date().toLocaleTimeString("en-us", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    );
  }, aSecondInMiliseconds);

  console.log(weatherInfo);

  if (!weatherInfo) {
    return <S.Loading>Loading...</S.Loading>;
  }

  return (
    <>
      <S.Container>
        <CardTemp
          locationName={weatherInfo.location.name}
          locationRegion={weatherInfo.location.region}
          tempNow={weatherInfo.current.temp_c}
          maxTemperature={weatherInfo.forecast.forecastday[0].day.maxtemp_c}
          minTemperature={weatherInfo.forecast.forecastday[0].day.mintemp_c}
          windData={weatherInfo.current.wind_kph}
          humidityData={weatherInfo.current.humidity}
          rainData={weatherInfo.current.cloud}
        />
        <Card>
          <AirQuality
            image={airQualityIcon}
            title="Qualidade do ar"
            quality="Boa"
            qualityNumber={50}
            pm2_5={Number(weatherInfo.current.air_quality.pm2_5.toFixed(2))}
            pm10={Number(weatherInfo.current.air_quality.pm10.toFixed(2))}
            so2={Number(weatherInfo.current.air_quality.so2.toFixed(2))}
            no2={Number(weatherInfo.current.air_quality.no2.toFixed(2))}
            o3={Number(weatherInfo.current.air_quality.o3.toFixed(2))}
            co={Number(weatherInfo.current.air_quality.co.toFixed(2))}
          />
        </Card>
        <Card>
          <SunTime
            image={sunTimeIcon}
            title="Horário do sol"
            sunrise={weatherInfo.forecast.forecastday[0].astro.sunrise}
            sunset={weatherInfo.forecast.forecastday[0].astro.sunset}
            hourNow={currentTime}
          />
        </Card>
        <Card>
          <ListWeekWeather />
        </Card>
      </S.Container>

      <S.GlobalStyle />
    </>
  );
}

export default App;
