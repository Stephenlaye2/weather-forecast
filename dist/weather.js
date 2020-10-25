// class Weather {
//   constructor(city) {
//     this.apikey = "ffb6ebf5e4729105099fd24aba27005b";
//     this.city = city;
//     // this.state = state;
//   }

//   // Fetch Weather from API

//   async getWeather() {
//     const response = await fetch(
//       `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}`
//     );

//     const responseData = await response.json();

//     return {
//       coord: responseData.coord,
//       main: responseData.main,
//       city: responseData.name,
//       temp: responseData.main.temp,
//       country: responseData.sys.country,
//       weather: responseData.weather,
//       wind: responseData.wind.speed,
//       description: responseData.weather[0].description,
//       icon: responseData.weather[0].icon,
//       humidity: responseData.main.humidity,
//       feels_like: responseData.main.feels_like,
//     };
//   }

//   // Change weather location
//   changeLocation(city) {
//     this.city = city;
//   }
// }
