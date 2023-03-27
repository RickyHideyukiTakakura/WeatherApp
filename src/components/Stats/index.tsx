import * as S from './styles';

interface IStats {
  icon: string;
  weatherDetail: string;
  data: number;
  unity: string;
}

export function Stats(props: IStats) {
  return (
    <S.Stats>
      <img src={props.icon} />
      <div>
        <p>{props.weatherDetail}</p>
        <h5>
          {props.data} <span>{props.unity}</span>
        </h5>
      </div>
    </S.Stats>
  );
}
