import { ListInfoAirQuality } from '../ListInfoAirQuality';
import * as S from './styles';

interface IAirQuality {
  image: string;
  title: string;
  quality: string;
  qualityNumber: number;
}

export function AirQuality(props: IAirQuality) {
  return (
    <S.AirQuality>
      <h2>
        <img src={props.image} />
        {props.title}
      </h2>

      <div>
        <p>{props.quality}</p>
        <p>{props.qualityNumber}</p>
      </div>

      <ListInfoAirQuality />
    </S.AirQuality>
  );
}
