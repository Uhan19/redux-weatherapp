import API_KEY from "../../api-key";

const rootURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${rootURL}&q=${city},us`;
  return {
    type: FETCH_WEATHER,
  };
}
