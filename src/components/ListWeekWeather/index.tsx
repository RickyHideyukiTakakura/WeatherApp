import { InfoWeekWeather } from '../InfoWeekWeather';
import { days } from './data';
import * as S from './styles';

export function ListWeekWeather() {
  return (
    <S.ListWeekWeather>
      {days.map((day) => (
        <InfoWeekWeather key={day.title} {...day} />
      ))}
    </S.ListWeekWeather>
  );
}
