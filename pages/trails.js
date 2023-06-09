import Head from 'next/head';
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
import Trails from '../components/Map';
import Footer from '../components/Footer';

export const getStaticProps = async () => {
  return { props: {} };
};

const trails = () => {
  return (
    <>
      <Head>
        <title>Fish Creek</title>
        <meta name='description' content="Fish Creek national park" />
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Trails trails='Fish Creek' message="Hiking in Calgary City"/>
      <Footer/>
    </>
  )
}

export default trails;
