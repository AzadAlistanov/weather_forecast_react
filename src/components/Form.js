import {useState, useContext} from 'react';
import { GlobalContext } from '../App';


export const Form = () => {

  const [input, setInput] = useState('');
  const { dispacth } = useContext(GlobalContext);

  const inputVaule = (event) => {
    setInput(event.target.value);
  }

  const addCity = (event) => {
    event.preventDefault();
    dispacth( {
      type: 'ADD_CITY',
      playload: input,
    })
    setInput('');
  }

  return (
    <form className='form' onSubmit={addCity}>
      <input className='form_input' onChange={inputVaule} value={input} placeholder='city..'/>
      <button className='form_button'>+</button>
    </form>
  )
}
