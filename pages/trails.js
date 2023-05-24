import Head from 'next/head';
import Image from 'next/image';
// import Hero from '../components/Hero'
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })
import Trails from '../components/Trails'
export default function () {
  return (
    <>
      <Head>
        <title>Fish Creek</title>
        <meta name='description' content="Fish Creek national park" />
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Trails trails='Fish Creek' message="Hiking in Calgary City"/>
    </>
  )
}
