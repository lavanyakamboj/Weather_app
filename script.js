const apiKey = "9b6fac77f614427ebae173615253007";

window.onload = () => {
    fetchWeather("Delhi, India");
};

async function getWeather() {
    const city =
    document.getElementById("locationInput")
    .value.trim();

    if(city){
        fetchWeather(city);
    }
}
async function fetchWeather(city){
    try{

        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
        );

        const data = await response.json();

        document.getElementById("cityName").textContent =
        `${data.location.name}, ${data.location.country}`;

        document.getElementById("temp").textContent =
        Math.round(data.current.temp_c);

        document.getElementById("condition").textContent =
        data.current.condition.text;

        document.getElementById("humidity").textContent =
        data.current.humidity + "%";

        document.getElementById("wind").textContent =
        data.current.wind_kph + " km/h";

        document.getElementById("feelsLike").textContent =
        Math.round(data.current.feelslike_c) + "°";

        document.getElementById("uv").textContent =
        data.current.uv;

        document.getElementById("weatherIcon").src =
        "https:" + data.current.condition.icon;

    }
    catch(error){

        alert("City not found");

    }
}