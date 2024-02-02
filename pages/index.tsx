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


export default function Home() {
  return (
    <>
    <div>
        <Navbar />
        <Hero  />
        <Update />
        <Events />
        <Thanks />
        <br />
        {/*<h1 className="text-center text-4xl font-bold">2023 Schedule</h1>*/}
        {/*<Events />*/}
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
