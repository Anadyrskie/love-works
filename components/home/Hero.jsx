import Image from 'next/image'
import splash from '../../public/loveworksSplash.jpeg'


export function Hero() {
    // hero image with a text overlay
    return (
        <div className="relative h-screen overflow-clip bg-gray-900">
            <div className="absolute inset-0">
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
            <div className="relative mx-auto max-w-7xl px-4 pt-5 pb-24 sm:px-6 md:pt-20 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    <span className="block">Love Works!</span>
                   <span> <span className="inline-block text-indigo-400">Night </span> and <span className="inline-block text-orange-300">Day</span> in Ajo</span>
                    <span className='mt-7 block text-[100px] sm:mt-3'>2023</span>
                </h1>
            </div>
        </div>
    )
}

export default Hero()