// _app.tsx

import type { AppProps } from 'next/app'
// eslint-disable-next-line camelcase
import { Nunito_Sans } from 'next/font/google'

import { globalStyles } from '../styles/global'

const nunitoSans = Nunito_Sans({ weight: ['400', '700'], subsets: ['latin'] })

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${nunitoSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
