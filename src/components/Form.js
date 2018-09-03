import React from 'react';
import './form.css';

const Form = props => (
  <div>
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City..."/>
      <input type="text" name="country" placeholder="Country..."/>
      <button className="btn">Get Weather</button>
    </form>
  </div>);

export default Form;
