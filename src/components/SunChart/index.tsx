import sunChartImg from "../../assets/sun-chart.svg";
import * as S from "./styles";

interface ISunChart {
  hourNow: string;
}

export function SunChart(props: ISunChart) {
  return (
    <S.SunChartWrapper>
      <S.SunChart>
        <S.Chart>
          <img src={sunChartImg} />
        </S.Chart>
        <time>{props.hourNow}</time>
      </S.SunChart>
    </S.SunChartWrapper>
  );
}
