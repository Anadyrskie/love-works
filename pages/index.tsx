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
// @ts-ignore
import Thanks from '@/components/Thanks'
import Update from "@/components/Update";
import Donate from "@/components/home/Donate/Donate";


export default function Home() {
  return (
    <>
    <div className='pb-10'>
        <Navbar />
        <Hero  />
        <Update />
        <h1 className="text-center text-4xl font-bold mt-10">2025 Schedule</h1>
        <Events />
        <Contact />
        <Donate />
        <Sponsors />
    </div>
    </>
  )
}


//  const contact = {
//     type : 'email',
//     prefix : 'mailto:',
//     value : 'test@anadyr.us'
// }
