import '../styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <script
          src="https://cairasearch.grapinelabs.com/caira-search.min.js"
          data-caira-site="cs_cswy3b2rs7eyndhw1n1py3bb"
          async
        ></script>
    </>
  )
}
