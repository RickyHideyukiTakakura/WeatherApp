import { ListInfoAirQuality } from "../ListInfoAirQuality";
import * as S from "./styles";

interface IAirQuality {
  image: string;
  title: string;
  quality: string;
  qualityNumber: number;
  pm2_5: number;
  pm10: number;
  so2: number;
  no2: number;
  o3: number;
  co: number;
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

      <ListInfoAirQuality
        pm2_5={props.pm2_5}
        pm10={props.pm10}
        so2={props.so2}
        no2={props.no2}
        o3={props.o3}
        co={props.co}
      />
    </S.AirQuality>
  );
}
