import * as S from './styles';

interface ILocation {
  image: string;
  location: string;
}

export function Location(props: ILocation) {
  return (
    <S.Location>
      <img src={props.image} />
      <strong>{props.location}</strong>
    </S.Location>
  );
}
