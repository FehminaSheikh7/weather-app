function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "fb95415c0b6f4ecce0343573faeab208";

    if (!city) {
        alert("⚠️ Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404" || data.cod === 404) {
                alert("❌ City not found");
                return;
            }

            document.getElementById("city-name").innerText = data.name;
            document.getElementById("temperature").innerText = `🌡 Temp: ${data.main.temp} °C`;
            document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
            document.getElementById("condition").innerText = `☁️ Condition: ${data.weather[0].description}`;

            
            const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            document.getElementById("icon").src = icon;
        })
        .catch(error => {
            alert("⚠️ Error fetching data");
            console.error(error);
        });
}
