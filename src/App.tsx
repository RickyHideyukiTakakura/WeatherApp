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
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  if (!weatherInfo) {
    return <div>Loading...</div>;
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
        />

        <Card>
          <AirQuality
            image={airQualityIcon}
            title="Qualidade do ar"
            quality="Boa"
            qualityNumber={50}
          />
        </Card>

        <Card>
          <SunTime
            image={sunTimeIcon}
            title="Horário do sol"
            sunrise={weatherInfo.forecast.forecastday[0].astro.sunrise}
            sunset={weatherInfo.forecast.forecastday[0].astro.sunset}
            hourNow={`${currentHour}:${currentMinute}`}
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
