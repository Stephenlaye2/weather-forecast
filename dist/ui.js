// const UI = function(){
 
//     this.location = document.getElementById("w-location");
//     this.desc = document.getElementById("w-desc");
//     this.string = document.getElementById("w-string");
//     this.details = document.getElementById("w-details");
//     this.icon = document.getElementById("w-icon");
//     this.humidity = document.getElementById("w-humidity");
//     this.feelsLike = document.getElementById("w-feels-like");
//     // this.dewpoint = document.getElementById('w-dewpoint');
//     this.wind = document.getElementById("w-wind");
//   }

//   UI.prototype.paint = function(weather) {
//     this.location.textContent = weather.city + ", " + weather.country;
//     this.desc.textContent = weather.description;
//     this.string.textContent = `${(weather.temp - 273.15).toFixed(
//       0
//     )} degree celsius`;
//     this.icon.setAttribute(
//       "src",
//       `http://openweathermap.org/img/wn/${weather.icon}@2x.png`
//     );
//     this.humidity.textContent = `Relative Humidity: ${weather.humidity}%`;
//     this.feelsLike.textContent = `Feels like ${(
//       weather.feels_like - 273.15
//     ).toFixed(0)} degree celsius`;
//     this.wind.textContent = `Wind Speed: ${weather.wind} mph`;
//   }

