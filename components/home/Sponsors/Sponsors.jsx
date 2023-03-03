import Image from "next/image";

import ACFAlogo from "../../../public/sponsors/ACFA-logo.png"
import cfsaLogo from "../../../public/sponsors/cfsa-logo.svg"
import freeportLogo from "../../../public/sponsors/freeport.png"
import acaLogo from "../../../public/sponsors/ACAlogo.png"
import friLogo from "../../../public/sponsors/FRILogo.png"
import ISDAlogo from "../../../public/sponsors/ISDA-logo.png"
import southwestLogo from "../../../public/sponsors/southwestAlliance.png"

export default function Sponsors() {
    return (
        <div className='m-5 flex flex-col items-center justify-center md:mx-10 m-auto'>
            <h1 className='text-center text-3xl font-bold'>Sponsors</h1>
            <p className='text-center'>We are grateful for the support of our sponsors. If you are interested in
                sponsoring, please contact us at <a className='text-blue-500'
                                                    href='mailto:sponsor@loveworksajo.com'>sponsor@loveoworksajo.com</a>
            </p>
            <span className={`space-y-5 space-x-5 items-center justify-center flex flex-col`}>
                    <div className={`justify-center items-center`}>
                        <a href='https://ajoartists.wordpress.com/ajo-council-for-the-fine-arts-acfa-2/' target='_blank'
                           rel='noreferrer'>
                        <Image className='rounded' src={ACFAlogo} height={110} alt='Ajo Council for the Fine Arts Logo'/>
                            <span className={`text-xs m-1`}>
                                <p className={``}>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Sponsored in part by: the DeGrazia Art and Cultural Foundation Fund Endowment for the Arts of Tucson Fund and Viola Steinfeld O'Neil Fund CFSA combined unrestricted Fund
                            </p>
                        </span>
                    </a>
                    <a href='https://fcx.com/' target='_blank' rel='noreferrer'>
                        <Image className='rounded max-h-50px' src={freeportLogo} height={110}
                               alt='Freeport McMoRan Logo'/>
                    </a>
                    </div>
                    <div className={`flex flex-inline flex-wrap gap-x-5 gap-y-5 m-auto items-center justify-center lg:max-w-[80%]`}>
                                          <a href='https://southwestfolklife.org/' target='_blank' rel='noreferrer'>
                        <Image className='rounded' src={southwestLogo} height={110}
                               alt='Southwest Folklife Alliance Logo'/>
                    </a>
                        <a href='https://cfsaz.org/' target='_blank' rel='noreferrer'>
                        <Image className='rounded' src={cfsaLogo} height={110} alt='Community Foundation for Southern Arizona Logo'/>
                    </a>

                    <a href='https://azarts.gov/' target='_blank' rel='noreferrer'>
                        <Image className='rounded' src={acaLogo} height={110}
                               alt='Logo for the Arizona Commission on the Arts'/>
                    </a>

                    <a href='https://ajofreerange.com/' target='_blank' rel='noreferrer'>
                        <Image className='rounded' src={friLogo} height={110} alt='Free Range Internet Logo'/>
                    </a>
                    <a href='https://www.isdanet.org/' target='_blank' rel='noreferrer'>
                        <Image className='rounded' src={ISDAlogo} height={110} alt='International Sonoran Desert Alliance Logo'/>
                    </a>
                    </div>
                </span>
        </div>
    )
}
