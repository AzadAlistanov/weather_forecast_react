import {useState, useEffect} from 'react';

const APP_KEY = process.env.REACT_APP_API_KEY_YT;

export const useWeatherApi = (city) => {
  const [weatherApi, setWeatherApi] = useState(null);

  const getWeather = async () => {
    let f = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_KEY}&units=metric`);
    let data = await f.json();
    setWeatherApi(data);
  }

  useEffect( () => {
    getWeather();
  }, [city]);

  return weatherApi;

}
