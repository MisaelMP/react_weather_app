import React, {Component} from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

const API_KEY = "9d17da14ac3a6ea4fcc55bdbe6f7ae82";

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter City and Country"
      });
    }
  }
  render() {
    return (
      <div className='wrapper'>

        <div className="container-title">
          <Titles/>
        </div>
        <div className="container-form">
          <Form getWeather={this.getWeather}/>
          <Weather temperature={this.state.temperature} city={this.state.city} country={this.state.country} humidity={this.state.humidity} description={this.state.description} error={this.state.error}/>
        </div>
        <div className="footer">Misael M. La vida es un carnaval</div>
      </div>
          );
          }
          }

          export default App;
