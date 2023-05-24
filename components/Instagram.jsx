import React from 'react'
import IgImg1 from '../public/ig-img-1.jpeg';
import IgImg2 from '../public/ig-img-2.jpeg';
import IgImg3 from '../public/ig-img-3.jpeg';
import IgImg4 from '../public/ig-img-4.jpeg';
import IgImg5 from '../public/ig-img-5.jpeg';
import IgImg6 from '../public/ig-img-6.jpeg';
import InstagramImg from './InstagramImg';


const Instagram = () => {
  return (
    <div id="contact" className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-black text-2xl font-bold'>Follow us on Instagram</p>
        <p className='text-black pb-4'>New Media and Production Design</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={IgImg1} link='https://www.instagram.com/zerospeedzero/'/>
            <InstagramImg socialImg={IgImg2} link='https://www.instagram.com/'/>
            <InstagramImg socialImg={IgImg3} link='https://www.instagram.com/'/>
            <InstagramImg socialImg={IgImg4} link='https://www.instagram.com/'/>
            <InstagramImg socialImg={IgImg5} link='https://www.instagram.com/'/>
            <InstagramImg socialImg={IgImg6} link='https://www.instagram.com/'/>
        </div>
    </div>
  )
}

export default Instagram