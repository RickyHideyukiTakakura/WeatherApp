import { Location } from '../Location';
import { TempNow } from '../TempNow';
import { Statistics } from '../Statistics';

import * as S from './styles';
import locationIcon from '../../assets/pin.svg';

export function CardTemp() {
  return (
    <S.CardTemp>
      <Location image={locationIcon} location="Rio do Sul, SC" />

      <TempNow temp={18} max={22} min={16} />

      <Statistics />
    </S.CardTemp>
  );
}
