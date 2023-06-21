import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import * as gtag from "../lib/gtag"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [url, setUrl] = useState('');
  const changePath = (url) => {
    gtag.pageview(url);
    console.log(url);
  }
  const handleNav = () => {
    setNav(!nav)
  }
  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 90) {
        setColor('#ffffff')
        setTextColor('#000000')
      } else {
        setColor('transparent')
        setTextColor('#ffffff')
      }
    }
    window.addEventListener('scroll', changeColor);
  }, [])
  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='./'>
          <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>City Hiker</h1>
        </Link>
        <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='./#hero' scroll={false} onClick={()=>changePath('/home')}>Home</Link>
          </li>
          <li className='p-4'>
            <Link href='./#gallery' scroll={false} onClick={()=>changePath('/gallery')}>Gallery</Link>
          </li>
          <li className='p-4'>
            <Link href='./#trails' scroll={false} onClick={()=>changePath('/trails')}>Trails</Link>
          </li>
          <li className='p-4'>
            <Link href='./#map' scroll={false} onClick={()=>changePath('/map')}>Map</Link>
          </li>
          <li className='p-4'>
            <Link href='./#contact' scroll={false} onClick={()=>changePath('/contact')}>Contact</Link>
          </li>
        </ul>
        {/* Mobile Button */}
        <div className='block sm:hidden z-10'>
          {nav ? <AiOutlineClose size={30} style={{color: `${textColor}`}} onClick={handleNav}/> 
          : <AiOutlineMenu size={30} style={{color: `${textColor}`}} onClick={handleNav}/> }
        </div>
        {/* Mobile Menu */}
        <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' 
        : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}> 
          <ul>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='./' onClick={() => {handleNav();changePath('/home')}}>Home</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='./#gallery' scroll={false} onClick={() => {handleNav();changePath('/gallery')}}>Gallery</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='./#trails' scroll={false} onClick={() => {handleNav();changePath('/trails')}} >Trails</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='./#map' scroll={false} onClick={() => {handleNav();changePath('/map')}} >Map</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='./#contact' scroll={false} onClick={() => {handleNav();changePath('/contact')}}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar