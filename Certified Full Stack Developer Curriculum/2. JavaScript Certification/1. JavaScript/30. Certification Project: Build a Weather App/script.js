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

async function getWeather(city) {
    try {
        const url = `https://weather-proxy.freecodecamp.rocks/api/city/${city}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

async function showWeather(city) {
    if (!city) return;

    const data = await getWeather(city);

    if (!data) {
        alert("Something went wrong, please try again later.");
        return;
    }

    weatherIconElement.src = data.weather?.[0]?.icon ?? "";
    weatherIconElement.alt = data.weather?.[0]?.description ?? "N/A";

    mainTemperatureElement.textContent = data.main?.temp ?? "N/A";
    feelsLikeElement.textContent = data.main?.feels_like ?? "N/A";
    humidityElement.textContent = data.main?.humidity ?? "N/A";
    windElement.textContent = data.wind?.speed ?? "N/A";
    windGustElement.textContent = data.wind?.gust ?? "N/A";

    weatherMainElement.textContent = data.weather?.[0]?.main ?? "N/A";
    locationElement.textContent = data.name ?? "N/A";
}

getWeatherBtn.addEventListener("click", () => {
    showWeather(selectCity.value);
});