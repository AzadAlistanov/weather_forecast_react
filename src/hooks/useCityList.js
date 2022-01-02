import { useEffect, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CITY':
      return [...state, action.playload];
    
    case 'DELETE_CITY':
      return [...state.filter((el) => el !== action.playload)]

    default:
      return state;
  }
}

export const useCityList = () => {
  const [state, dispacth] = useReducer(reducer, JSON.parse(localStorage.getItem('cityList')) || []);
  const cityList = state;

  useEffect( () => {
    localStorage.setItem('cityList', JSON.stringify(cityList));
  }, [cityList]);
  return [cityList, dispacth]
}
