import * as ELEMENTS from './elements.js';
import {Http} from './http.js';
import {WeatherData, weatherProxyHandler} from "./weather-data.js";

const APP_ID = '26e2dfa7636d49117717d071394f8389';
ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

function searchWeather() {
    let cityName = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
    if (cityName.length === 0) {
        return alert('Please enter a city name');
    }
    ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'block';
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'none';

    const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + APP_ID;

    Http.fetchData(URL)
        .then(responseData => {
            let weatherData = new WeatherData(cityName, responseData.weather[0].description.toUpperCase());
            let weatherProxy = new Proxy(weatherData, weatherProxyHandler);
            weatherProxy.temperature = responseData.main.temp;

            updateWeather(weatherProxy);
        })
        .catch(error => {
            ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'none';
            alert(error);
        });
}

function updateWeather(weatherData) {
    ELEMENTS.ELEMENT_WEATHER_CITY.textContent = weatherData.cityName;
    ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description;
    ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent = weatherData.temperature;

    ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'none';
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'block';
}

