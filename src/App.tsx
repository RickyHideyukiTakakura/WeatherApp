import { AirQuality } from './components/AirQuality';
import { CardTemp } from './components/CardTemp';
import { SunTime } from './components/SunTime';
import Card from './components/Card';
import * as S from './styles/global';

import sunTimeIcon from './assets/sun-time.svg';
import airQualityIcon from './assets/leaf.svg';
import { ListWeekWeather } from './components/ListWeekWeather';

function App() {
  return (
    <>
      <S.Container>
        <CardTemp />

        <Card>
          <AirQuality
            image={airQualityIcon}
            title="Qualidade do ar"
            quality="Boa"
            qualityNumber={21}
          />
        </Card>

        <Card>
          <SunTime
            image={sunTimeIcon}
            title="Horário do sol"
            sunrise="06:12"
            sunset="18:52"
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
