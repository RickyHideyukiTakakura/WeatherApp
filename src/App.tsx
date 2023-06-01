import { useEffect, useState } from 'react';
import airQualityIcon from './assets/leaf.svg';
import sunTimeIcon from './assets/sun-time.svg';
import { AirQuality } from './components/AirQuality';
import Card from './components/Card';
import { CardTemp } from './components/CardTemp';
import { ListWeekWeather } from './components/ListWeekWeather';
import { SunTime } from './components/SunTime';
import useWeatherApi from './hooks/useWeatherApi';
import * as S from './styles/global';

function App() {
  const { weatherInfo } = useWeatherApi();
  const aSecondInMiliseconds = 1000;
  const [currentTime, setCurrentTime] = useState<string>('00:00');

  // console.log(weatherInfo);

  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, aSecondInMiliseconds);

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
