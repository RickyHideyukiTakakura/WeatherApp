import cloudsIcon from '../../assets/weather-clouds.svg';
import sunIcon from '../../assets/weather-sun.svg';
import rainIcon from '../../assets/weather-rain.svg';
import thunderIcon from '../../assets/weather-thunder.svg';
import cloudyIcon from '../../assets/weather-cloudy.svg';

export const days = [
  {
    title: 'Amanhã',
    image: cloudsIcon,
    max: 21,
    min: 16
  },
  {
    title: 'Sexta',
    image: sunIcon,
    max: 28,
    min: 16
  },
  {
    title: 'Sábado',
    image: rainIcon,
    max: 20,
    min: 12
  },
  {
    title: 'Domingo',
    image: thunderIcon,
    max: 15,
    min: 10
  },
  {
    title: 'Segunda',
    image: cloudyIcon,
    max: 22,
    min: 18
  }
];
