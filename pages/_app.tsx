import 'tailwindcss/tailwind.css'
import 'react-image-lightbox/style.css';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
