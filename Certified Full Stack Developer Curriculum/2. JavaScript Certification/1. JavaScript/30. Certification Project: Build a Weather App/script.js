const selectCity = document.getElementById("cities");

const getWeatherBtn = document.getElementById("get-weather-btn");

// Weather Elements
const weatherIconElement = document.getElementById("weather-icon");
const mainTemperatureElement = document.getElementById("main-temperature");
const feelsLikeElement = document.getElementById("feels-like");
const humidityElement = document.getElementById("humidity");
const windElement = document.getElementById("wind");
const windGustElement = document.getElementById("wind-gust");
const weatherMainElement = document.getElementById("weather-main");
const locationElement = document.getElementById("location");


// const getWeather = () => {
//   if (selectCity.value === "") {
//     return
//   } else {



//   console.log(`Selected: ${selectCity.value}`)
//   }
// }

async function getWeather(city) {
    if (!city)
        return null;


    const url = `https://weather-proxy.freecodecamp.rocks/api/city/${city}`


    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;

}





async function showWeather(city) {
    try {
        const data = await getWeather(city);

        if (!data) return;

        weatherIconElement.src = data.weather?.[0]?.icon;

        mainTemperatureElement.innerHTML = data.main.temp;

        feelsLikeElement.innerHTML = data.main.feels_like;

        humidityElement.innerHTML = data.main.humidity;

        windElement.innerHTML = data.wind.speed;

        windGustElement.innerHTML = data.wind.deg;

        weatherMainElement.innerHTML = data.weather?.[0]?.main;

        locationElement.innerHTML = data.name;


        console.log(iconUrl)



    }

    catch (error) {
        alert("Something went wrong, please try again later");
    }
}

getWeatherBtn.addEventListener("click", () => {
    showWeather(selectCity.value)
});

