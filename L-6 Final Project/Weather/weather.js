const apiKey = "ad731bc0ae274a9f887183459220502";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`;

async function getWeatherByLocation(city){
    let response = await fetch(url(city));
    let data = await response.json();

    let weather = document.createElement("div");
    weather.classList.add("row");

    weather.innerHTML = `
    <div class="col-12 col-md-6 col-lg-4">
    <div class="card">
    <h5 class="status">Today Weather Forecast</h5>
    <h4>${data.location.name}, ${data.location.country}</h4>
    <h3><img src="https:${data.current.condition.icon}"/>
    ${data.current.temp_c}°C / ${data.current.temp_f}°F<h3>
    <h5>
    <span>${data.current.condition.text} <span>
    <span> | Wind ${data.current.wind_mph} mph</span></h5>
    </div>
    </div>
    
    <div class="col-12 col-md-6 col-lg-4">
    <div class="card">
    <h5 class="status">Tomorrow | ${data.forecast.forecastday[1].date}</h5>
    <h4>${data.location.name}, ${data.location.country}</h4>
    <h3><img src="https:${data.forecast.forecastday[1].day.condition.icon}"/>
    ${data.forecast.forecastday[1].day.maxtemp_c}°C / ${data.forecast.forecastday[1].day.maxtemp_f}°F<h3>
    <h5>
    <span>${data.forecast.forecastday[1].day.condition.text} <span>
    <span> | Wind ${data.forecast.forecastday[1].day.maxwind_mph} mph</span></h5>
    </div>
    </div>

    
    <div class="col-12 col-md-6 col-lg-4">
    <div class="card">
    <h5 class="status">Overmorrow | ${data.forecast.forecastday[2].date}</h5>
    <h4>${data.location.name}, ${data.location.country}</h4>
    <h3><img src="https:${data.forecast.forecastday[2].day.condition.icon}"/>
    ${data.forecast.forecastday[2].day.maxtemp_c}°C / ${data.forecast.forecastday[2].day.maxtemp_f}°F<h3>
    <h5>
    <span>${data.forecast.forecastday[2].day.condition.text} <span>
    <span> | Wind ${data.forecast.forecastday[2].day.maxwind_mph} mph</span></h5>
    </div>
    </div>
    `
    main.innerHTML= "";
    
    main.appendChild(weather);
}


form.addEventListener("keyup", (e) => {
    e.preventDefault();

    const city = search.value;

    if(city){
        getWeatherByLocation(city);
    }
});