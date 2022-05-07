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

  let forecastdays = document.querySelector("#forecastBox");

  //Forecast
  //1
  let tempDegreesC1 = Math.round(response.data.main.temp);
  let tempDegreesF1 = Math.round((tempDegreesC * 9) / 5 + 32);
  let wind1 = response.data.wind.speed;
  wind1 = wind1.toFixed(1);
  let humidity1 = response.data.main.humidity;
  let description1 = response.data.weather[0].description;

  //2
  let tempDegreesC2 = Math.round(response.data.main.temp);
  let tempDegreesF2 = Math.round((tempDegreesC * 9) / 5 + 32);
  let wind2 = response.data.wind.speed;
  wind2 = wind2.toFixed(1);
  let humidity2 = response.data.main.humidity;
  let description2 = response.data.weather[0].description;

  //3
  let tempDegreesC3 = Math.round(response.data.main.temp);
  let tempDegreesF3 = Math.round((tempDegreesC * 9) / 5 + 32);
  let wind3 = response.data.wind.speed;
  wind3 = wind3.toFixed(1);
  let humidity3 = response.data.main.humidity;
  let description3 = response.data.weather[0].description;

  //4
  let tempDegreesC4 = Math.round(response.data.main.temp);
  let tempDegreesF4 = Math.round((tempDegreesC * 9) / 5 + 32);
  let wind4 = response.data.wind.speed;
  wind4 = wind4.toFixed(1);
  let humidity4 = response.data.main.humidity;
  let description4 = response.data.weather[0].description;

  //5
  let tempDegreesC5 = Math.round(response.data.main.temp);
  let tempDegreesF5 = Math.round((tempDegreesC * 9) / 5 + 32);
  let wind5 = response.data.wind.speed;
  wind5 = wind5.toFixed(1);
  let humidity5 = response.data.main.humidity;
  let description5 = response.data.weather[0].description;

  let forecast = `
  <div class="container">
    <div class="row" id = "display-current-weather">
      <div class="col-3"></div>
      <div class="col-3"  id="weather-current-icon"></div>
      <div class="col-3" id="weather-current"></div>
      <div class="col-3"></div>
    </div>
        

    <div class="row" style="text-align: center">
    
      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
            <strong>DATE</strong>
            <p><img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"></p>
            <p>${tempDegreesC1}°C / ${tempDegreesF1}°F</p>
            <p>Wind: ${wind1} km/h </p>
            <p>Humidity: ${humidity1}% </p>
            <p class="description">${description1} </p>
          </div>
        </div>
      </div>

      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
            <strong>DATE</strong>
            <p><img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"></p>
            <p>${tempDegreesC2}°C / ${tempDegreesF2}°F</p>
            <p>Wind: ${wind2} km/h </p>
            <p>Humidity: ${humidity2}% </p>
            <p class="description">${description2} </p>
          </div>
        </div>
      </div>
      
      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
            <strong>DATE</strong>
            <p><img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"></p>
            <p>${tempDegreesC3}°C / ${tempDegreesF3}°F</p>
            <p>Wind: ${wind3} km/h </p>
            <p>Humidity: ${humidity3}% </p>
            <p class="description">${description3} </p>
          </div>
        </div>
      </div>

      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
            <strong>DATE</strong>
            <p><img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"></p>
            <p>${tempDegreesC4}°C / ${tempDegreesF4}°F</p>
            <p>Wind: ${wind4} km/h </p>
            <p>Humidity: ${humidity4}% </p>
            <p class="description">${description4} </p>
          </div>
        </div>
      </div>

      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
            <strong>DATE</strong>
            <p><img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"></p>
            <p>${tempDegreesC5}°C / ${tempDegreesF5}°F</p>
            <p>Wind: ${wind5} km/h </p>
            <p>Humidity: ${humidity5}% </p>
            <p class="description">${description5} </p>
          </div>
        </div>
      </div>

    </div>

    <div class="row" style="text-align: center">
      <div class="col-12">
        <button id="tryAgain" onClick="document.location.reload(true)">Try another city</button>
      </div>
    </div>
      `;

  forecastdays.innerHTML = forecast;
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
