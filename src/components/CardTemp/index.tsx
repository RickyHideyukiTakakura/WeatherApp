import locationIcon from '../../assets/pin.svg';
import { Location } from '../Location';
import { Statistics } from '../Statistics';
import { TempNow } from '../TempNow';
import * as S from './styles';

interface CardTempProps {
  locationName: string;
  locationRegion: string;
  tempNow: number;
  maxTemperature: number;
  minTemperature: number;
  windData: number;
  humidityData: number;
  rainData: number;
}

export function CardTemp(props: CardTempProps) {
  return (
    <S.CardTemp>
      <Location
        image={locationIcon}
        location={`${props.locationName}, ${props.locationRegion}`}
      />

      <TempNow
        temp={props.tempNow}
        max={props.maxTemperature}
        min={props.minTemperature}
      />

      <Statistics
        windData={props.windData}
        humidityData={props.humidityData}
        rainData={props.rainData}
      />
    </S.CardTemp>
  );
}
