export class WeatherData {
    constructor(cityName, description) {
        this.cityName = cityName;
        this.description = description;
        this.temperature = '';
    }
}

export const weatherProxyHandler = {
    get: function (target, properrty) {
        return Reflect.get(target, properrty);
    },

    set: function (target, property, value) {
        let newValue = (value - 273.15).toFixed(2) + '℃';
        Reflect.set(target, property, newValue);
    }
};