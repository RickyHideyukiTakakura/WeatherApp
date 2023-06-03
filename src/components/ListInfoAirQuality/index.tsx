import { InfoAirQuality } from "../InfoAirQuality";

import * as S from "./styles";

interface ListInfoAirQualityProps {
  pm2_5: number;
  pm10: number;
  so2: number;
  no2: number;
  o3: number;
  co: number;
}

export function ListInfoAirQuality(props: ListInfoAirQualityProps) {
  return (
    <S.ListInfoAirQuality>
      <InfoAirQuality infoNumber={props.pm2_5} infoName={"PM2.5"} />
      <InfoAirQuality infoNumber={props.pm10} infoName={"PM10"} />
      <InfoAirQuality infoNumber={props.so2} infoName={"SO₂"} />
      <InfoAirQuality infoNumber={props.no2} infoName={"NO₂"} />
      <InfoAirQuality infoNumber={props.o3} infoName={"O₃"} />
      <InfoAirQuality infoNumber={props.co} infoName={"CO"} />
    </S.ListInfoAirQuality>
  );
}
