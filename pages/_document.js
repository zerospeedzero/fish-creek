import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../components/Navbar'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"/>
        <script src="../lib/gtm.js" async/>
      </Head>
      <body>
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NR7792R"
          height="0" width="0" className="hidden invisible"></iframe></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
