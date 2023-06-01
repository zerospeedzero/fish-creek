import React from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import { useRouter } from 'next/router';

const Weather = ({heading, message}) => {
  // const [city, setCity] = useState('');
  const router = useRouter();
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState('Weather');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=fish%20creek&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  console.log('weather url: ' + url)
  const fetchWeather = (e) => {
    // setLoading(true);
    if (menu == "Weather") {
      axios.get(url).then((response) => {
        setWeather(response.data);
      });
      setMenu('Forecast')
    } else {
      setMenu('Weather')
      router.push('./forecast')   
    }
    // setCity('');
    // setLoading(false);
  };
  
  return (
    <div className='flex flex-col justify-center h-full p-5 text-white z-[2] '>
      {weather.main && (menu=="Forecast") &&
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
        <button className='px-8 py-2 border' onClick={fetchWeather}>{menu}</button>
        { (menu=="Weather") &&
          <p className="hidden sm:block text-justify w-[500px] mt-24 p-2 text-sm italic bg-black/30">Welcome to the Fishcreek hiking trail interactive map. If you have a love for the outdoors and are seeking an escape from the everyday busyness of the city, you have come to the right place! Fish Creek provides a remarkable landscape with many trails to choose from. Your visit to Fishcreek is guaranteed to be unique as the trails wind through beautiful forests, offering great views of the landscape and wildlife. Whether you are an expert hiker or a beginner looking to start their hiking journey, Fish Creek has something for everyone. This provincial park is right in the heart of Calgary and not only offers serene, but also exhilarating trails depending on your skill level. Join us as we explore the vast and picturesque trails of Fishcreek!</p>
        }
      </div>
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
    </div>
  )
}

export default Weather