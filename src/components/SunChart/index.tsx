import sunChartImg from "../../assets/sun-chart.svg";
import * as S from "./styles";

interface ISunChart {
  hourNow: string;
}

export function SunChart(props: ISunChart) {
  const [hour, period] = props.hourNow.split(" ");
  const [hourStr, minuteStr] = hour.split(":");
  const currentHour = parseInt(hourStr);
  const currentMinute = parseInt(minuteStr);
  const isPM = period === "PM";

  let posX = isPM
    ? ((currentHour - 6 + 12) / 11) * 100
    : ((currentHour - 6) / 11) * 100;

  if (!isPM) {
    if ((currentHour <= 6 && currentMinute < 59) || currentHour === 12) {
      posX = 0;
    }
  }

  if (isPM) {
    if (currentHour > 5) {
      posX = 100;
    }
  }

  const sunChartStyles = {
    "--pos-x": posX,
  } as React.CSSProperties;

  return (
    <S.SunChartWrapper>
      <S.SunChart style={sunChartStyles}>
        <S.Chart>
          <img src={sunChartImg} />
        </S.Chart>
        <time>{props.hourNow}</time>
      </S.SunChart>
    </S.SunChartWrapper>
  );
}
