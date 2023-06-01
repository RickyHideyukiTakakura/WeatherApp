import { Stats } from '../Stats';
import windIcon from '../../assets/temp-wind.svg';
import humidityIcon from '../../assets/temp-humidity.svg';
import rainIcon from '../../assets/temp-rain.svg';
import * as S from './styles';

interface StatisticsProps {
  windData: number;
  humidityData: number;
  rainData: number;
}

export function Statistics(props: StatisticsProps) {
  return (
    <S.Statistics>
      <Stats
        icon={windIcon}
        weatherDetail={'Vento'}
        data={props.windData}
        unity={'km/h'}
      />
      <Stats
        icon={humidityIcon}
        weatherDetail={'Umidade'}
        data={props.humidityData}
        unity={'%'}
      />
      <Stats
        icon={rainIcon}
        weatherDetail={'Chuva'}
        data={props.rainData}
        unity={'%'}
      />
    </S.Statistics>
  );
}
