import Image from "next/image";

import ACFAlogo from "../../../public/sponsors/ACFA-logo.png"
import cfsaLogo from "../../../public/sponsors/cfsa-logo.svg"
import freeportLogo from "../../../public/sponsors/freeport.png"
import acaLogo from "../../../public/sponsors/ACAlogo.png"
import friLogo from "../../../public/sponsors/FRILogo.png"
import ISDAlogo from "../../../public/sponsors/ISDA-logo.png"

export default function Sponsors() {
    return (
            <div className='flex flex-col m-5 md:mx-10 items-center justify-center'>
                <h1 className='text-center text-3xl font-bold'>Sponsors</h1>
                <p className='text-center'>We are grateful for the support of our sponsors. If you are interested in sponsoring, please contact us at <a className='text-blue-500' href='mailto:sponsor@loveworksajo.com'>sponsor@loveoworksajo.com</a>
                </p>
                <span className={`space-y-5 space-x-5`}>
                    <div className={`justify-center items-center`}>
                        <a href='https://ajoartists.wordpress.com/ajo-council-for-the-fine-arts-acfa-2/' target='_blank' rel='noreferrer'>
                        <Image className='rounded' src={ACFAlogo} height={110} alt='ACFA Logo' />
                            <span className={`text-xs m-1`}>
                                <p className={``}>
                                Sponsored in part by: the DeGrazia Art and Cultural Foundation Fund
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    Endowment for the Arts of Tucson Fund and Viola Steinfeld O'Neil Fund
                                CFSA combined unrestricted Fund
                            </p>
                        </span>
                    </a>
                    <a href='https://fcx.com/' target='_blank' rel='noreferrer'>
                        <Image className='rounded max-h-50px' src={freeportLogo} height={110} alt='Freeport McMoRan Logo' />
                    </a>
                    </div>
                    <div className={`flex flex-inline flex-wrap gap-x-5 gap-y-5 m-auto items-center justify-center`}>
                        <a href='https://cfsaz.org/' target='_blank' rel='noreferrer'>
                        <Image className='rounded' src={cfsaLogo} height={110} alt='CFS Logo' />
                    </a>
                    <a href='https://azarts.gov/' target='_blank' rel='noreferrer'>
                        <Image className='rounded' src={acaLogo} height={110} alt='Logo for the Arizona Commission on the Arts' />
                    </a>
                    <a href='https://ajofreerange.com/' target='_blank' rel='noreferrer'>
                        <Image className='rounded' src={friLogo} height={110} alt='Free Range Internet Logo' />
                    </a>
                    <a href='https://www.isdanet.org/' target='_blank' rel='noreferrer'>
                        <Image className='rounded' src={ISDAlogo} height={110} alt='ISDA Logo' />
                    </a>
                    </div>
                </span>
            </div>
    )
}
