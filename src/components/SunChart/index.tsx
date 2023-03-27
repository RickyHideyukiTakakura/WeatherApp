import * as S from './styles';
import sunChartImg from '../../assets/sun-chart.svg';

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
