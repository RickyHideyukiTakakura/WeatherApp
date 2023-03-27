import { SunChart } from '../SunChart';
import * as S from './styles';

interface ISunTime {
  image: string;
  title: string;
  sunrise: string;
  sunset: string;
}

export function SunTime(props: ISunTime) {
  return (
    <S.SunTime>
      <h2>
        <img src={props.image} />
        {props.title}
      </h2>

      <SunChart hourNow="14:36" />

      <S.Time>
        <time>{props.sunrise}</time>
        <time>{props.sunset}</time>
      </S.Time>
    </S.SunTime>
  );
}
