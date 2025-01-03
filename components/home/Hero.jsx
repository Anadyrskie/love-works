import Image from 'next/image'
import splash from '../../public/loveWorksTest.jpg'


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
            <div className="relative bg-gradient-to-b from-black w-full pt-5 md:pt-20 mx-auto pb-24 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-shadow-md tracking-tight text-white sm:text-5xl lg:text-6xl">
                    <span className='block text-7xl sm:text-8xl md:text-[100px] lg:text-[110px]'>Love Works</span>
                    <span>Ajo Desert Festival</span>
                    <span className="block">March 14, 15, 16</span>
                </h1>
            </div>
        </div>
    )
}

export default Hero()