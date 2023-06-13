import '@/styles/globals.css'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Script from 'next/script'
import * as gtag from "../lib/gtag"

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
      console.log('route change event is logged' + url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return  (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  );
}
