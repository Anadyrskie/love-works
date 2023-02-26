import Image from 'next/image'
import splash from '../../public/loveworksSplash.jpeg'


export function Hero() {
    // hero image with a text overlay
    return (
        <div className="relative bg-gray-900 overflow-clip h-screen">
            <div className="absolute inset-0 ">
                <Image
                    className="object-cover"
                    src={splash}
                    alt=""
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div className="relative max-w-7xl pt-5 md:pt-20 mx-auto pb-24 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    <span className="block">Love Works!</span>
                   <span> <span className="inline-block text-indigo-400">Night </span> and <span className="inline-block text-orange-300">Day</span><br />Ajo Desert Festival</span>
                    <span className='block mt-7 sm:mt-3 text-[100px]'>2023</span>
                </h1>
            </div>
        </div>
    )
}

export default Hero()