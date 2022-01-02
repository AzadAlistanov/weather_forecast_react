import {useState, useEffect} from 'react';

const APP_KEY = process.env.REACT_APP_API_KEY_YT;

export const useCityWeekApi = (lat, lon) => {
  const [weekCity, setWeekCity] = useState(null);

  const getWeekCity = async () => {
    let f = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,current,hourly,minutely&appid=${APP_KEY}&units=metric`)
    let data = await f.json();
    setWeekCity(data);
  }

  useEffect( () => {
    getWeekCity();
  }, []);

  return weekCity;
}
