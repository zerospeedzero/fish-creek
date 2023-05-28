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
      <Hero heading='Welcome to Fish Creek' message="Hiking in Calgary City"/>
      <Forecast/>
    </>
  )
}
