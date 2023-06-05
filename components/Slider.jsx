import Image from 'next/image';
import React, {useEffect, useState} from 'react'
import { SliderData } from './SliderData';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from 'next-share';
import Carousel from 'better-react-carousel';
import SocialMedia from './SocialMedia';

const Slider = ({slides}) => {
  const [current, setCurrent ] =useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length -1  : current - 1)
  }
  if (!Array.isArray(slides) || slides.length <=0 ) {
    return null;
  }
  const responsiveLayout = [
    { breakpoint: 9999, cols: 3, rows: 1, gap: 10, loop: true, autoplay: 10000 },
    { breakpoint: 1024, cols: 2, rows: 1, gap: 10, loop: true, autoplay: 10000 },
    // { breakpoint: 768,  cols: 1, rows: 1, gap: 10, loop: true, autoplay: 5000 }

  ]
  return (
    <div id='gallery' className='mx-auto pt-[90px]'>
      <h1 className='text-2xl font-bold text-black text-center p-4'>Gallery of Fish Creek</h1>
        <Carousel gap={10} scrollSnap loop showDots responsiveLayout={responsiveLayout}>
        {SliderData.map((slide, index) => {
          return (
            <Carousel.Item key={index}>
              <img 
                src={(process.env.NODE_ENV == 'development') ? slide.image : `${process.env.imagePrefix}` + slide.image} 
                alt='dummy'
                width="100%"
                onClick={(e) => {console.log('abc1')}}
              />
              <div className="-mt-7">
                <SocialMedia/>
              </div>
            </Carousel.Item>
          )
        })}
        </Carousel>
      {/* </div> */}
    </div>
  )
}

export default Slider