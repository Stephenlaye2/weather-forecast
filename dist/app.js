
const Storage = function() {
  
  this.city;
  this.defaultCity = "London";
}

Storage.prototype.getLocationData = function() {
  if (localStorage.getItem("city") === null) {
    this.city = this.defaultCity;
  } else {
    this.city = localStorage.getItem("city");
  }
  return {
    city: this.city,
  };
}

Storage.prototype.setLocationData = function(city) {
  localStorage.setItem("city", city);
  // localStorage.setItem("city", this.defaultCity);
}



// init Storage
const storage = new Storage();

const weatherLocation = storage.getLocationData();

class Weather {
  constructor(city) {
    this.apikey = "ffb6ebf5e4729105099fd24aba27005b";
    this.city = city;
    // this.state = state;
  }

  // Fetch Weather from API

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}`
    );

    const responseData = await response.json();

    return {
      coord: responseData.coord,
      main: responseData.main,
      city: responseData.name,
      temp: responseData.main.temp,
      country: responseData.sys.country,
      weather: responseData.weather,
      wind: responseData.wind.speed,
      description: responseData.weather[0].description,
      icon: responseData.weather[0].icon,
      humidity: responseData.main.humidity,
      feels_like: responseData.main.feels_like,
    };
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}
// Instantiate(init) weather object
const weather = new Weather(weatherLocation.city);


const UI = function(){
 
  this.location = document.getElementById("w-location");
  this.desc = document.getElementById("w-desc");
  this.string = document.getElementById("w-string");
  this.details = document.getElementById("w-details");
  this.icon = document.getElementById("w-icon");
  this.humidity = document.getElementById("w-humidity");
  this.feelsLike = document.getElementById("w-feels-like");
  // this.dewpoint = document.getElementById('w-dewpoint');
  this.wind = document.getElementById("w-wind");
}

UI.prototype.paint = function(weather) {
  this.location.textContent = weather.city + ", " + weather.country;
  this.desc.textContent = weather.description;
  this.string.textContent = `${(weather.temp - 273.15).toFixed(
    0
  )} degree celsius`;
  this.icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${weather.icon}@2x.png`
  );
  this.humidity.textContent = `Relative Humidity: ${weather.humidity}%`;
  this.feelsLike.textContent = `Feels like ${(
    weather.feels_like - 273.15
  ).toFixed(0)} degree celsius`;
  this.wind.textContent = `Wind Speed: ${weather.wind} mph`;
}



// init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", () => {
  const city = document.getElementById("city").value;

  weather.changeLocation(city);

  // Set location in LS
  storage.setLocationData(city);

  getWeather();

  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((result) => {
      ui.paint(result);

      console.log(result);
    })
    .catch((err) => {
      return console.log(err);
    });
}
