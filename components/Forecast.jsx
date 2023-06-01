import { useEffect, useState } from 'react';
import Image from 'next/image';

const WeatherForecast = () => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchWeatherForecast = async () => {
      try {
        // Make API request to OpenWeatherMap
        const apiKey = 'YOUR_API_KEY';
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=fish%20creek&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Extract the next 5 days forecast from the API response
        const forecastData = data.list.slice(0, 35);
        setForecast(forecastData);
      } catch (error) {
        console.error('Error fetching weather forecast:', error);
      }
    };

    fetchWeatherForecast();
  }, []);

  // Group the forecast by date
  const groupedForecast = forecast.reduce((result, item) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(item.dt_txt).toLocaleDateString('en-US', options);
    if (!result[date]) {
      result[date] = [];
    }
    result[date].push(item);
    return result;
  }, {});

  // Map the weather codes to weather icons
  const getWeatherIcon = (code) => {
    // Icon mappings...
  };

  return (
    <div className="weather-forecast text-white pt-24 p-4 z-[2]">
      {Object.entries(groupedForecast).map(([date, items]) => (
        <div key={date}  className="forecast-day mb-4">
          <h3 className="text-2xl font-semibold mb-2">{date}</h3>
          <div className="forecast-items flex flex-wrap justify-start gap-2">
            {items.map((item) => (
              <div key={item.dt} className="forecast-item p-2 bg-white/80 text-black border border-gray-300 rounded hover:animate-bounce">
                <div className="time text-sm font-semibold">
                  {new Date(item.dt_txt).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })}
                </div>
                <div className="temperature text-lg font-semibold">
                  {Math.round(item.main.temp)}°C
                </div>
                <div className="weather-icon">
                  <Image width={100} height={50} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="Weather Icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;

