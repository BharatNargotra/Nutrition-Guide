import '../styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <script
          src="https://cairasearch.grapinelabs.com/caira-search.min.js"
          data-caira-site="cs_5xc8wtwx1at0jpys2hv97qjd"
          async
        ></script>
    </>
  )
}