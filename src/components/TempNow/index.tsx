import * as S from './styles';

interface ITempNow {
  temp: number;
  max: number;
  min: number;
}

export function TempNow(props: ITempNow) {
  return (
    <S.TempNow>
      <S.Number>
        <strong>{props.temp}</strong>
        <div>
          {props.max}°<span> {props.min}°</span>
        </div>
      </S.Number>
      <div>°C</div>
    </S.TempNow>
  );
}
