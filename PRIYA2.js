const apiKey = 'your_api_key';  // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('city').value;
    if (city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    displayWeather(data);
                } else {
                    alert('City not found!');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                alert('Error fetching weather data!');
            });
    } else {
        alert('Please enter a city name!');
    }
}

function displayWeather(data) {
    document.getElementById('weather-info').style.display = 'block';
    document.getElementById('city-name').innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById('weather').innerText = `Weather: ${data.weather[0].description}`;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').innerText = `Wind: ${data.wind.speed} m/s`;
}
