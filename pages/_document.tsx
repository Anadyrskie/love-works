import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html style={{scrollBehavior:'smooth'}} lang="en">
      <Head />
      <body className='bg-white dark:bg-gray-800 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
