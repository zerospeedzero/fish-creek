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
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    if (router.pathname == '/trails') {
      window.scrollTo(0,0);
    }
    return () => {router.events.off("routeChangeComplete", handleRouteChange);};
  }, [router]);
  return  (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"></Script>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', GA_MEASUREMENT_ID , {
              page_path: window.location.pathname,
            });
          `,
          }}
      />
      <Navbar/>
      <Component {...pageProps} />
      {/* <script src={"https://maps.googleapis.com/maps/api/js?key=" + process.env.NEXT_PUBLIC_GOOGLE_API_KEY }></script> */}
    </>
  );
}
