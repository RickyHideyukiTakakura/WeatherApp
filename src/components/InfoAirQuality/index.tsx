import * as S from './styles';

interface IInfoAirQuality {
  infoNumber: number;
  infoName: string;
}

export function InfoAirQuality(props: IInfoAirQuality) {
  return (
    <S.InfoAirQuality>
      <p>{props.infoNumber}</p>
      <small>{props.infoName}</small>
    </S.InfoAirQuality>
  );
}
