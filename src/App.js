import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Form } from './components/Form';
import { CardList } from './components/CardList';
import { WeekCity } from './components/WeekCity';
import { useCityList } from './hooks/useCityList';

export const GlobalContext = React.createContext();

export default function App() {

  const [state, dispacth] = useCityList();

  return (
    <GlobalContext.Provider value={{state, dispacth}}>
      <Routes>
        <Route path='/' element={
          <>
            <Form/>
            <CardList/>
          </>
        }/>
        <Route path='/city/:city/:lat/:lon' element={
          <WeekCity />
        }/>
      </Routes>
    </GlobalContext.Provider>
  );
}
