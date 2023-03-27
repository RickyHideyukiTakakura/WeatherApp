import { InfoAirQuality } from '../InfoAirQuality';
import { infos } from './data';

import * as S from './styles';

export function ListInfoAirQuality() {
  return (
    <S.ListInfoAirQuality>
      {infos.map((info) => (
        <InfoAirQuality key={info.infoName} {...info} />
      ))}
    </S.ListInfoAirQuality>
  );
}
