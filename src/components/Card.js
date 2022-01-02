import { memo, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useWeatherApi } from '../hooks/useWeatherApi';
import { GlobalContext } from '../App';

export const Card = memo(({ city }) => {
  const { dispacth } = useContext(GlobalContext);

  const weatherApi = useWeatherApi(city);
  
  if (!weatherApi) return null;
  
  const { name, weather, main, coord } = weatherApi;
  const { description, icon } = weather[0];
  const { temp } = main;

  const deleteCity = (event) => {
    event.preventDefault();
    dispacth( {
      type: 'DELETE_CITY',
      playload: city,
    })
  }

  return (
    <div className='inner__card'>
      <div className='card_buttons'>
        <button className='card_week'>
          <Link className='link' to={
            `/city/${city.toLowerCase()}/${coord.lat}/${coord.lon}`
            }>week</Link>
        </button>
        <button className='card_delete' onClick={deleteCity}>X</button>
      </div>
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
  )
})
