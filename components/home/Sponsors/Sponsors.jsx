import Image from "next/image";

import ACFAlogo from "../../../public/sponsors/ACFA-logo.png"
import acaLogo from "../../../public/sponsors/ACAlogo.png"
import friLogo from "../../../public/sponsors/FRILogo.png"
import ISDAlogo from "../../../public/sponsors/ISDA-logo.png"
import chamberLogo from "../../../public/sponsors/ajochamber.jpg"

export default function Sponsors() {
    return (<div id='sponsors' className='flex flex-col items-center justify-center mx-10 m-auto'>
            <h1 className='text-center text-3xl font-bold'>Sponsors</h1>
            <p className='text-center pb-2'>We are grateful for the support of our sponsors. If you are interested in
                sponsoring, please contact us at <a className='text-blue-500'
                                                    href='mailto:sponsor@loveworksajo.com'>sponsor@loveoworksajo.com</a>
            </p>
            <span className={`space-y-5 space-x-5 items-center justify-center flex flex-col mt-2`}>
                    <div
                        className={`flex flex-inline flex-wrap gap-x-5 gap-y-5 m-auto items-center justify-center lg:max-w-[80%]`}>

                    <a href='https://azarts.gov/' target='_blank' rel='noreferrer'>
                        <Image className='rounded' src={acaLogo} height={110}
                               alt='Logo for the Arizona Commission on the Arts'/>
                    </a>

                    <a href='https://ajofreerange.com/' target='_blank' rel='noreferrer'>
                        <Image className='rounded' src={friLogo} height={110} alt='Free Range Internet Logo'/>
                    </a>
                    <a href='https://www.isdanet.org/' target='_blank' rel='noreferrer'>
                        <Image className='rounded' src={ISDAlogo} height={110}
                               alt='International Sonoran Desert Alliance Logo'/>
                    </a>
                        <a href='https://www.ajochamber.com/' target='_blank' rel='noreferrer'>
                        <Image className='rounded' src={chamberLogo} height={110}
                               alt='International Sonoran Desert Alliance Logo'/>
                    </a>
                    </div>
                </span>
    </div>)
}
