import { useContext } from 'react';
import { Card } from './Card';
import { GlobalContext } from '../App';

export const CardList = () => {
  const { state } = useContext(GlobalContext);
  const cityList = state;

  return (
    <div className='card__wrapper'>
        {
          cityList.map((city) => <Card key={city} city={city}/>)
        }
      </div>
  )
}
