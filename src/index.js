function cityName(event) {
  event.preventDefault();
  let city = document.querySelector("#city").value;
  let apiKey = "5d9cd8b79b305222517d953848160e56";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiURL}&appid=${apiKey}`).then(showTemperature);
}

function showTemperature(response) {
  //Weather sentence
  title = document.querySelector(".card-header");
  let sentenceWeather = `On ${currentDay}, ${today} at ${currentTime}, the weather in <strong>${response.data.name}</strong> is:`;
  title.innerHTML = sentenceWeather;

  //Current weather
  let weatherIcon = document.querySelector("#weather-current-icon");
  let weatherCurrent = document.querySelector("#weather-current");
  let tempDegreesC = Math.round(response.data.main.temp);
  let tempDegreesF = Math.round((tempDegreesC * 9) / 5 + 32);
  let wind = response.data.wind.speed;
  wind = wind.toFixed(1);
  let humidity = response.data.main.humidity;
  let description = response.data.weather[0].description;

  let weatherCurrentIcon = `<div><img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"</div>`;
  let weatherCurrentText = `
  <div id="temperature0">Temperature: ${tempDegreesC}°C / ${tempDegreesF}°F </div>
          <div>Wind speed: ${wind} km/h </div>
          <div>Humidity: ${humidity}%
          <div class="description">${description} </div>`;

  weatherIcon.innerHTML = weatherCurrentIcon;
  weatherCurrent.innerHTML = weatherCurrentText;

  let form = document.querySelector("#search-form");
  form.innerHTML = ``;

  //Forecast 1
  let weatherIcon1 = document.querySelector("#weatherIcon1");
  let forecast1 = document.querySelector("#forecast1");
  let tempDegreesC1 = Math.round(response.data.main.temp);
  let tempDegreesF1 = Math.round((tempDegreesC * 9) / 5 + 32);
  let wind1 = response.data.wind.speed;
  wind1 = wind1.toFixed(1);
  let humidity1 = response.data.main.humidity;
  let description1 = response.data.weather[0].description;
  console.log(forecast1);

  let weatherForecastIcon1 = `<strong>DATE</strong><div><img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"</div>`;
  let weatherForecastText1 = `
  <div id="temperature1">${tempDegreesC1}°C / ${tempDegreesF1}°F </div>
          <div>Wind speed: ${wind1} km/h </div>
          <div>Humidity: ${humidity1}%
          <div class="description">${description1} </div>`;

  weatherIcon1.innerHTML = weatherForecastIcon1;
  forecast1.innerHTML = weatherForecastText1;

  //Forecast 2
  let weatherIcon2 = document.querySelector("#weatherIcon2");
  let forecast2 = document.querySelector("#forecast2");
  let tempDegreesC2 = Math.round(response.data.main.temp);
  let tempDegreesF2 = Math.round((tempDegreesC * 9) / 5 + 32);
  let wind2 = response.data.wind.speed;
  wind2 = wind2.toFixed(1);
  let humidity2 = response.data.main.humidity;
  let description2 = response.data.weather[0].description;

  let weatherForecastIcon2 = `<strong>DATE</strong><div><img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"</div>`;
  let weatherForecastText2 = `
  <div id="temperature1">${tempDegreesC2}°C / ${tempDegreesF2}°F </div>
          <div>Wind speed: ${wind2} km/h </div>
          <div>Humidity: ${humidity2}%
          <div class="description">${description2} </div>`;

  weatherIcon2.innerHTML = weatherForecastIcon2;
  forecast2.innerHTML = weatherForecastText2;
}

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentDay = days[now.getDay()];
let currentMonth = months[now.getMonth()];
let currentHour = now.getHours();
let currentMinute = now.getMinutes();
if (currentMinute < 10) {
  currentMinute = `0${currentMinute}`;
} else {
  now.getMinutes();
}
let currentDate = now.getDate();
let currentTime = `${currentHour}:${currentMinute}`;
let today = `${currentMonth} ${currentDate}`;
let sentence = `What is the weather right now in...?`;

let title = document.querySelector(".card-header");
title.innerHTML = sentence;

let submit = document.querySelector("#search-form");
submit.addEventListener("submit", cityName);
