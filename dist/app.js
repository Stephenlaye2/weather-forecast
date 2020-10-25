// init Storage
const storage = new Storage();

const weatherLocation = storage.getLocationData();

// Instantiate(init) weather object
const weather = new Weather(weatherLocation.city);

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
