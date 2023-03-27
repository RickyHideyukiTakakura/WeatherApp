import * as S from './styles';

interface IInfoWeekWeather {
  title: string;
  image: string;
  max: number;
  min: number;
}

export function InfoWeekWeather(props: IInfoWeekWeather) {
  return (
    <S.InfoWeekWeather>
      <h4>{props.title}</h4>
      <img src={props.image} />
      <p>
        {props.max}° <span>{props.min}°</span>
      </p>
    </S.InfoWeekWeather>
  );
}
