import Image from "next/image";
import freeportLogo from "../../../public/sponsors/freeport.png"
import acaLogo from "../../../public/sponsors/ACAlogo.png"
import friLogo from "../../../public/sponsors/FRILogo.png"

export default function Sponsors() {
    return (
        <div className='flex flex-col items-center px-10'>
            <div className='flex flex-col items-center'>
                <h1 className='text-3xl font-bold text-center'>Sponsors</h1>
                <p className='text-center'>We are grateful for the support of our sponsors. If you are interested in sponsoring, please contact us at <a className='text-blue-500' href='mailto:sponsor@loveworksajo.com'>sponsor@loveoworksajo.com</a>
                </p>
                <span className={`flex flex-inline space-x-5 my-5`}>
                    <a href='https://fcx.com/' target='_blank' rel='noreferrer'>
                        <Image className='rounded max-h-50px' src={freeportLogo} height={110} alt='Freeport McMoRan Logo' />
                    </a>
                    <a href='https://azarts.gov/' target='_blank' rel='noreferrer'>
                        <Image className='rounded' src={acaLogo} height={110} alt='Logo for the Arizona Commission on the Arts' />
                    </a>
                    <a href='https://ajofreerange.com.gov/' target='_blank' rel='noreferrer'>
                        <Image className='rounded' src={friLogo} height={110} alt='Free Range Internet Logo' />
                    </a>

                </span>
            </div>
        </div>
    )
}
