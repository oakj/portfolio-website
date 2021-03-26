import '../styles/globals.scss'
import { AppProps } from 'next/app' // Next.js TypeScript type for _app.tsx props

function MyApp({ Component, pageProps}: AppProps ) {
  return <Component {...pageProps} />
}

export default MyApp
