import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html style={{scrollBehavior:'smooth'}} lang="en">
      <Head>
          {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
          <title>Love Works Desert Festival</title>
          <meta name="description" content="Website for Ajo's Love Works festival" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                      <link rel="manifest" href="/site.webmanifest" />
                          <meta name="apple-mobile-web-app-title" content="Love Works Desert Festival" />
                              <meta name="application-name" content="Love Works Desert Festival" />
                                  <meta name="msapplication-TileColor" content="#da532c" />
                                      <meta name="theme-color" content="#ffffff" />

        </Head>
      <body className='dark:bg-gray-800 bg-white dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
