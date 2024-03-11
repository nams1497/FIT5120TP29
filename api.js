const latitude = YOUR_LATITUDE_VALUE;
const longitude = YOUR_LONGITUDE_VALUE;
const apiKey = "750d4d8dc2c9c03863c8862d016e95fb";
const weather_api_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,daily&appid=${apiKey}`;

fetch(weather_api_url)
  .then(response => response.json())
  .then(weather_data => {
    const uvi = weather_data.current.uvi;
    const clouds = weather_data.current.weather[0].description;
    console.log({'UVI': uvi, 'Clouds': clouds});
  })
  .catch(error => console.error('Error fetching weather data:', error));
