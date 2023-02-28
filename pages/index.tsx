import Head from 'next/head'
// @ts-ignore
import {Navbar} from '@/components/Navbar'
// @ts-ignore
import {Hero} from '@/components/home/Hero'
// @ts-ignore
import Contact from '@/components/home/Contact/Contact.jsx'
// @ts-ignore
import Sponsors from '@/components/home/Sponsors/Sponsors'
// @ts-ignore
import {Events} from '@/components/home/Events/Events'


export default function Home() {
  return (
    <>
      <Head>
        <title>Love Works Desert Festival</title>
        <meta name="description" content="Website for Ajo's Love Works festival" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/loveworksPoster.jpeg" />
      </Head>
      <Navbar />
    <div>
        <Hero  />
        <Events />
        <Contact />
        <Sponsors />
    </div>
    </>
  )
}


// const contact = {
//     type : 'email',
//     prefix : 'mailto:',
//     value : 'test@anadyr.us'
// }
