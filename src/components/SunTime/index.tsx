import { SunChart } from "../SunChart";
import * as S from "./styles";

interface ISunTime {
  image: string;
  title: string;
  hourNow: string;
  sunrise: number;
  sunset: number;
}

export function SunTime(props: ISunTime) {
  return (
    <S.SunTime>
      <h2>
        <img src={props.image} />
        {props.title}
      </h2>

      <SunChart hourNow={props.hourNow} />

      <S.Time>
        <time>{props.sunrise}</time>
        <time>{props.sunset}</time>
      </S.Time>
    </S.SunTime>
  );
}
