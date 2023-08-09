import React from 'react'
// import IgImg1 from '/public/ig-img-1.png';
// import IgImg2 from '/public/ig-img-2.png';
// import IgImg3 from '/public/ig-img-3.png';
// import IgImg4 from '/public/ig-img-4.png';
// import IgImg5 from '/public/ig-img-5.png';
// import IgImg6 from '/public/ig-img-6.png';
import InstagramImg from './InstagramImg';


const Instagram = () => {

  return (
    <div id="contact" className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-black text-2xl font-bold'>Follow us on Instagram</p>
        <p className='text-black pb-4'>New Media and Production Design</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg="1" link='https://www.instagram.com/mynameiskreg/'/>
            <InstagramImg socialImg="2" link='https://www.instagram.com/catherineexx_/'/>
            <InstagramImg socialImg="3" link='https://www.instagram.com/kiirstenve/'/>
            <InstagramImg socialImg="4" link='https://www.instagram.com/zerospeedzero/'/>
            <InstagramImg socialImg="5" link='https://www.instagram.com/yang_celine/'/>
            <InstagramImg socialImg="6" link='https://instagram.com/slo_laura?igshid=OGQ5ZDc2ODk2ZA=='/>
        </div>
    </div>
  )
}

export default Instagram