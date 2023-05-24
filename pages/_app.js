import '@/styles/globals.css'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KE;
  // }, [])
  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname == '/trails') {
      window.scrollTo(0,0);
    }
  }, [pathname]);
  return  (
    <>
      <Navbar/>
      <Component {...pageProps} />
      {/* <script src={"https://maps.googleapis.com/maps/api/js?key=" + process.env.NEXT_PUBLIC_GOOGLE_API_KEY }></script> */}
    </>
  );
}
