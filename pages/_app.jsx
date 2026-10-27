import '../styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <script
          src="https://cairasearch.grapinelabs.com/caira-search.min.js"
          data-caira-site="cs_b7bv1v014v6aqw5009wr4bkj"
          async
        ></script>
    </>
  )
}
