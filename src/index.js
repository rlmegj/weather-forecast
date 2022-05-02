function cityName(event) {
  event.preventDefault();
  title = document.querySelector(".card-header");
  let city = document.querySelector("#city").value;
  let apiKey = "5d9cd8b79b305222517d953848160e56";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiURL}&appid=${apiKey}`).then(showTemperature);
}

function location(position) {
  position.preventDefault();
  title = document.querySelector(".card-header");
  let sentenceWeather = `On ${currentDay}, ${today} at ${currentTime}, the weather in is:`;
  title.innerHTML = sentenceWeather;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`;
  axios.get(`${apiURL}&appid=${apiKey}`).then(showTemperature);
}

function showTemperature(response) {
  let tempTodayDegrees = document.querySelector("#temperature-current");
  let tempDegreesC = Math.round(response.data.main.temp);
  let sentenceWeather = `On ${currentDay}, ${today} at ${currentTime}, the weather in <strong>${response.data.name}</strong> is:`;
  title.innerHTML = sentenceWeather;
  tempTodayDegrees.innerHTML = `${tempDegreesC}°C`;
}

navigator.geolocation.getCurrentPosition(cityName);
navigator.geolocation.getCurrentPosition(location);

let now = new Date();
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
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

//submit = document.querySelector("#current-location");
//submit.addEventListener("click", location);
