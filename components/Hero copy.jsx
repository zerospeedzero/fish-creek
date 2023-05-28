import React from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import Weather from '../components/Weather';
import Spinner from '../components/Spinner';

const Head = ({heading, message}) => {
  // const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=fish%20creek&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  const fetchWeather = (e) => {
    // setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
    });
    // setCity('');
    console.log(weather[0]);
    // setLoading(false);
  };
  
  return (
    <div id="hero" className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-image'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2]'/>
      <div className='flex flex-col justify-center h-full p-5 text-white z-[2] '>
        {weather.main && 
          <div className='h-1/3 flex flex-col justify-center' >
            <div className='self-end flex justify-between'>
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
        }
        <div className="h-1/3">
          <h2 className='text-5xl font-bold' >{heading}</h2>
          <p className='py-5 text-xl'>{message}</p>
          <button className='px-8 py-2 border' onClick={fetchWeather}>Weather</button>

        </div>
        { weather.main &&
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
      </div>
        {/* Weather */}
        {/*weather.main && <Weather data={weather} /> */}
    </div>
  )
}

export default Head