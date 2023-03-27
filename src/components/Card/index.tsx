import { ReactNode } from 'react';
import * as S from './styles';

interface ICard {
  children: ReactNode;
}

function Card(props: ICard) {
  return <S.Card>{props.children}</S.Card>;
}

export default Card;
