import React from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import { useRouter } from 'next/router';
import ForecastSummary from '../components/ForecastSummary';

const Weather = ({heading, message}) => {
  const router = useRouter();
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState('Weather');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=fish%20creek&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  console.log('weather url: ' + url)
  const fetchWeather = (e) => {
    if (menu == "Weather") {
      axios.get(url).then((response) => {
        setWeather(response.data);
      });
      setMenu('Forecast')
    } else {
      setMenu('Weather')
    }
  };
  
  return (
    <div className='flex flex-col justify-center content-center h-full p-5 text-white z-[2] '>
      <div className="h-1/3 flex flex-col-reverse justify-center">
        {weather.main &&
          <div className=''>
            <div className='flex flex-row justify-between items-center'>
              <h3 className='text-3xl '>Today</h3>
              <div className='flex flex-row'>
                <div className='flex flex-col items-center'>
                  <Image
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt='/'
                    width='60'
                    height='60'
                  />
                  <p className='text-2xl'>{weather.weather[0].main}</p>
                </div>
                <p className='pt-3 text-5xl items-center'>{weather.main.temp.toFixed(0)}&#176;</p>
              </div>
            </div>
          </div>
        }
      </div>
      <div className="h-1/3">
        <h2 className='text-5xl font-bold' >{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <button className='px-8 py-2 border' onClick={fetchWeather}>{menu}</button>
      </div>
      <div className="h-1/3">
        { !weather.main && (menu=="Weather") &&
          <p className="hidden sm:block float-right text-justify w-[400px] mt-24 p-2 text-sm italic bg-black/30">Explore Fishcreek hiking trail interactive map. Escape the city and enjoy remarkable landscapes with a variety of trails. Whether a beginner or an expert, Fish Creek offers something for everyone in Calgary heart.</p>
        }
        {weather.main && (menu=="Forecast") && 
          <div className='h-1/3 relative p-8 rounded-md'>
            <p className='text-2xl text-center pb-6'>Weather in {weather.name}</p>
            <div className='flex justify-between text-center'>
              <div>
                <p className='font-bold text-2xl'>{weather.main.feels_like.toFixed(0)}&#176;</p>
                <p className='text-xl'>Feels Like</p>
              </div>
              <div>
                <p className='font-bold text-2xl'>{weather.main.humidity}%</p>
                <p className='text-xl'>Humidity</p>
              </div>
              <div>
                <p className='font-bold text-2xl'>{weather.wind.speed.toFixed(0)} MPH</p>
                <p className='text-xl'>Winds</p>
              </div>
            </div>
          </div>
        }
        {weather.main && (menu=="Weather") &&
          <ForecastSummary/>
        }
      </div>
    </div>
  )
}

export default Weather