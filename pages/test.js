import Head from 'next/head';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })
import Test from '../components/Test'
const trails = () => {
  return (
    <>
      <Head>
        <title>Fish Creek</title>
        <meta name='description' content="Fish Creek national park" />
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Test trails='Fish Creek' message="Hiking in Calgary City"/>
    </>
  )
}

export default trails;
