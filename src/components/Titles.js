import React from 'react';
import './title.css'
import './weather.css'

const Titles = () => (
<div className="title">
  <div>
    <h1>Weather App</h1>
  </div>
  <div className="subtitle">
    <p>Find out temperature, conditions and more...</p>
  </div>
  <div className="icon sun-shower">
    <div className="cloud"></div>
    <div className="sun">
      <div className="rays"></div>
    </div>
    <div className="rain"></div>
  </div>

  <div className="icon thunder-storm">
    <div className="cloud"></div>
    <div className="lightning">
      <div className="bolt"></div>
      <div className="bolt"></div>
    </div>
  </div>

  <div className="icon cloudy">
    <div className="cloud"></div>
    <div className="cloud"></div>
  </div>

  <div className="icon flurries">
    <div className="cloud"></div>
    <div className="snow">
      <div className="flake"></div>
      <div className="flake"></div>
    </div>
  </div>

  <div className="icon sunny">
    <div className="sun">
      <div className="rays"></div>
    </div>
  </div>

  <div className="icon rainy">
    <div className="cloud"></div>
    <div className="rain"></div>
  </div>

</div>
);

export default Titles;
