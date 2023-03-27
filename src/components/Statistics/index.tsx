import { Stats } from '../Stats';
import { statistics } from './data';

import * as S from './styles';

export function Statistics() {
  return (
    <S.Statistics>
      {statistics.map((stats) => (
        <Stats key={stats.icon} {...stats} />
      ))}
    </S.Statistics>
  );
}
