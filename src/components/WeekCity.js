import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useWeatherApi } from '../hooks/useWeatherApi';
import { useCityWeekApi } from '../hooks/useCityWeekApi';
import { Day } from './Day';

export const WeekCity = () => {
  const { city, lat, lon } = useParams();
  const weatherApi = useWeatherApi(city);
  const weekCity = useCityWeekApi(lat, lon)
 
  if (!weatherApi) return null;

  const { name, weather, main } = weatherApi;
  const { description, icon } = weather[0];
  const { temp } = main;
  
  if (!weekCity) return null;

  const { daily } = weekCity;

  return (
    <>
    <div className='week_wrapper'>
      <div className='inner__card'>
        <div className='card_description'>
          <img className='card_image' src={`http://api.openweathermap.org/img/w/${icon}.png`} alt=''/>
          <div>{description}</div>
        </div>
        <div className='card_city'>{name}</div>
        <div className='card_temperature'>Температура:
          <span className='card_temperature-num'> {temp.toFixed()}°C</span> 
        </div>
        <div>
        </div>
      </div>
      <button className='week_dutton'>
        <Link className='link' to='/'>К списку городов</Link>
      </button>
    </div>
      <div className='week_list'>
        {
          daily.map((day) => <Day key={day.dt} day={day} /> )
        }
      </div>
    </>
  )
}
