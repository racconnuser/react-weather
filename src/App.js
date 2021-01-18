import './Style/Weather.css';
import React, {Component} from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      url: 'http://api.openweathermap.org/data/2.5/weather?q=Nizhny Novgorod',
      key: '52e9000aa97b0e185c8f01ad406aa724',
      temperature: '',
      city: '',
      weather: '',
      date: new Date().toLocaleTimeString()

    }
  }

  componentDidMount() {
    fetch(this.state.url + '&appid=' + this.state.key)
      .then(response => {
        return response.json();
      })
      .then((data) => {
        console.log('data: ', data)
        this.setState({
          city: data.name,
          temperature: Math.round(data.main.temp - 273) + '\u00b0',
          weather: data.weather[0].icon
        })
      })
    setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString()
      })
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="info">
            <div className="info__title">Weather</div>
            <div className="info__date">{this.state.date}</div>
          </div>
          <div className='weather'>
            <div className="weather__city">
              <div><strong>City:</strong></div>
              <div>{this.state.city}</div>
            </div>
            <div className="weather__temperature">
              <div><strong>Temperature:</strong></div>
              <div>{this.state.temperature}</div>
            </div>
            <div className="weather__icon">
              <div><strong>Precipitation</strong></div>
              <img src={'http://openweathermap.org/img/wn/' + this.state.weather + '.png'} alt=""/>
            </div>
          </div>
          <div className="weather-bg">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
