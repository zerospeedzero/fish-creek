import Head from 'next/head';
import Hero from '../components/Hero';
import { SliderData} from '../components/SliderData';
import Slider from '../components/Slider';
import Instagram from '../components/Instagram';
import Footer from '../components/Footer';
import Map from '../components/Map';
import Trails from '../components/Trails';

// const inter = Inter({ subsets: ['latin'] })

export const getStaticProps = async () => {
  return { props: {} };
};


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
      <Map/>
      <Trails/>
      <Instagram/>
      <Footer/>
    </>
  )
}
