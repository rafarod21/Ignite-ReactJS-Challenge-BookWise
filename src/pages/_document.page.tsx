import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@/styles/stitches.config'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/icon.ico" />

        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
