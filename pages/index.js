import Head from 'next/head';
import Hero from '../components/Hero';
import { SliderData} from '../components/SliderData';
import Slider from '../components/Slider';
import { Inter } from 'next/font/google';
import Instagram from '../components/instagram';
import Footer from '../components/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>City Hiker</title>
        <meta name='description' content="Fish Creek national park" />
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Hero heading='Welcome to Fish Creek' message="Hiking in Calgary City"/>
      <Slider slides={SliderData}/>
      {/* <Trails/> */}
      <Instagram/>
      <Footer/>
    </>
  )
}
