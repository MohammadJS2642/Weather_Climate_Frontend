import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './StyleWeatherWidget.css';

class WeatherWidget extends Component {
    render() {
        return (
            <div className='background_weather'>
                <h4 className='weather_status'>Rainy</h4>
                <p className='weather_degree'>10<sup className="degree">o </sup><sapn className='kelvin'>C</sapn></p>
            </div >
        );
    };
}

export default WeatherWidget;