import Image from 'next/image'
import splash from '../../public/loveWorks2025.png'


export function Hero() {
    // hero image with a text overlay
    return (
        <div className="relative overflow-clip h-screen">
            <div className="absolute inset-0 ">
                <Image
                    className="object-cover"
                    src={splash}
                    alt=""
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="100vw, 100vh"
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div className="relative text-shadow-md bg-gradient-to-b from-[#242424] dark:from-[#0a0a0a] bg-opacity-70 w-full pt-5 md:pt-20 mx-auto pb-24 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-blur tracking-tight text-white sm:text-5xl lg:text-6xl max-w-max">
                    <span className='block text-7xl sm:text-8xl md:text-[100px] lg:text-[110px] text-center'><span className='text-orange-500'>Love</span> <span className='text-blue-400'>Works</span></span>
                    <span className='block text-6xl sm:text-7xl md:text-[90px] lg:text-[100px] '><span
                        className='text-orange-500'>20</span><span className='text-blue-400'>25</span></span>
                    <span>Ajo Desert Festival</span>
                    <span className="block">March <span className='text-5xl sm:text-6xl md:text-[80px] lg:text-[80px]'>14, 15, 16</span></span>
                </h1>
            </div>
        </div>
    )
}

export default Hero()