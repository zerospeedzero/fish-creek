import { useEffect, useState } from 'react';
import Image from 'next/image';
const ForecastSummary = () => {
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
        // const forecastData = data.list.slice(0, 35);
        const resultData = data.list.slice(0,40);
        let forecastInfo = [];
        resultData.forEach((dateItem, index) => {
          if (dateItem.dt_txt.includes('09:00:00')) {
            forecastInfo.push(dateItem);
          }
        })
        // setForecast(forecastData);
        setForecast(forecastInfo);
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
    <div className='flex flex-col justify-between'>
      <h3 className="text-center text-3xl pb-5">5 days forecast</h3>
      <div className="flex z-[2]">
        {Object.entries(groupedForecast).map(([date, items],index) => (
            <div key={index} className="flex flex-wrap justify-start p-2">
              {items.map((item) => (
                <div key={item.dt} className="p-2 bg-white/80 text-black border border-gray-300 rounded hover:animate-bounce">
                  <div className="time text-xs font-semibold">
                    {/*new Date(item.dt_txt).toLocaleTimeString('en-US', { month: 'long', day: 'numeric' })*/}
                    {new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                  </div>
                  <div className="temperature text-lg font-semibold">
                    {Math.round(item.main.temp)}°C
                  </div>
                  <div className="weather-icon">
                    <Image width={60} height={50} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="Weather Icon" />
                  </div>
                </div>
              ))}
            </div>
        ))}
      </div>

    </div>
  );
};

export default ForecastSummary;

