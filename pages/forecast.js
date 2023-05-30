import Head from 'next/head';
import Forecast from '../components/Forecast'
import Hero from '../components/Hero';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>City Hiker</title>
        <meta name='description' content="Fish Creek national park" />
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <div className='flex items-center justify-center bg-fixed bg-center bg-cover custom-image'>
        {/* Overlay */}
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]'/>        
        <Forecast className=''/>
      </div>
    </>
  )
}
