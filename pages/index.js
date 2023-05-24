import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import { SliderData} from '../components/SliderData';
import Slider from '../components/Slider';
import { Inter } from 'next/font/google';
import Trails from '../components/Trails'
import Instagram from '../components/instagram';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Fish Creek</title>
        <meta name='description' content="Fish Creek national park" />
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Hero heading='Welcome to hiking paradise' message="Hiking in Calgary City"/>
      <Slider slides={SliderData}/>
      {/* <Trails/> */}
      <Instagram/>
    </>
  )
}
