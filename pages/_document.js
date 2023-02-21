import { Html, Head, Main, NextScript } from 'next/document'
{/* <script src="../path/to/flowbite/dist/flowbite.js"></script> */ }
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>

      <body>
        <NextScript src="https://cdn.jsdelivr.net/npm/chart.js"></NextScript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
