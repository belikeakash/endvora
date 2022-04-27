import React, { useState } from 'react'
import './Filter.css'

function Filter(props) {
    const [city,setCity] = useState('');
    const [state,setState] = useState('')
    
    const formSubmit = (event) => {
        event.preventDefault();
        const filterData = {
            city : city,
            state : state,
        }
        // console.log(filterData);
        setCity('');
        setState('');
        props.filterInfo(filterData)

    }

    const fun = () => {

    }
    
  return (props.trigger) ? (
    <div className='form'>
        <form onClick = {formSubmit}>
        <input type="text" placeholder='state' value={state} onChange={(e)=> {
            setState(e.target.value); 
        }}  />
        <input type="text" placeholder='city' value={city} onChange={(e)=> {
            setCity(e.target.value); 
        }}  />
        <button>Search</button>
        </form>
    </div>
    
  ) : "";
}

export default Filter;



