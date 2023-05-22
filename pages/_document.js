import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../components/Navbar'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        {/* <Navbar/> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
