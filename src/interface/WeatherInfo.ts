export interface WeatherInfo {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };

  current: {
    temp_c: number;
    wind_kph: number;
    humidity: number;
    cloud: number;
    air_quality: {
      pm2_5: number;
      pm10: number;
      so2: number;
      no2: number;
      o3: number;
      co: number;
    };
  };

  forecast: {
    forecastday: [
      {
        date: string;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          condition: {
            text: string;
            icon: string;
          };
        };
        astro: {
          sunrise: number;
          sunset: number;
        };
      },
      {
        date: string;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          condition: {
            text: string;
            icon: string;
          };
        };
        astro: {
          sunrise: number;
          sunset: number;
        };
      },
      {
        date: string;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          condition: {
            text: string;
            icon: string;
          };
        };
        astro: {
          sunrise: number;
          sunset: number;
        };
      }
    ];
  };
}
