import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html style={{scrollBehavior:'smooth'}} lang="en">
      <Head />
      <body className='dark:bg-gray-800 bg-white dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
