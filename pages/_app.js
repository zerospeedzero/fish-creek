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
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return  (
    <>
      <Script strategy="afterInteractive" src={"https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID}></Script>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} 
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-21QYR215HP' , {
              page_path: window.location.pathname,
            });
          `,
          }}
      />
      <Navbar/>
      <Component {...pageProps} />
    </>
  );
}
