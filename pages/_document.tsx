import { Html, Head, Main, NextScript } from 'next/document'
import {Navbar} from "@/components/Navbar";

export default function Document() {
  return (
    <Html style={{scrollBehavior:'smooth'}} lang="en">
        <Head>
            {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
            <title>Love Works Desert Festival</title>
            <meta name="description" content="Website for Ajo's Love Works festival"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"/>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
            <link rel="shortcut icon" href="/favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <meta name="apple-mobile-web-app-title" content="MyWebSite"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <meta name="apple-mobile-web-app-title" content="Love Works Desert Festival"/>
            <meta name="application-name" content="Love Works Desert Festival"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>

        </Head>
        <body className='dark:bg-gray-800 bg-white dark:text-white'>
        <Main/>
        <NextScript/>
        </body>
    </Html>
  )
}
