import Image from "next/image";
import Link from "next/link";


export default function EventPanel({event}) {
    return (
        <div
            className={`flex bg-white py-6 px-10 border w-full sm:min-h-[8em] shadow-lg` +
                `flex-row dark:border-gray-700 rounded-lg space-x-4`}>
            <div className='inline-block flex flex-col w-[20%]'>
                <Image className="rounded-[28px]"
                       src={event.image.url}
                       alt={event.image.alt}
                       width={300}
                       height={300}
                />
            </div>

            <div className="flex flex-col inline-flex leading-normal w-[80%]">
                <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"> {event.title}</h5>
                <h6 className="text-l tracking-tight text-gray-700 dark:text-gray-400 "> {event.date}</h6>
                <div>
                    <a href={event.location.link} className="text-l text-gray-700 dark:text-gray-400 items-center">
                        <svg className={'fill-gray-500 dark:fill-gray-600 w-[1em] h-[1em] inline-block'} viewBox="0 0 395.71 395.71">
                            <g>
                                <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
                            </g>
                        </svg>
                        <p className="inline-block ml-1">{event.location.name}</p>
                    </a>
                </div>
                <p className="mt-t dark:text-white font-normal">{event.panel.p1}</p>
                <p className="mt-2 dark:text-white font-normal">{event.panel.p2}</p>
                <p className="mt-2 dark:text-white font-normal">{event.panel.p3}</p>
            </div>
            <Link href={`/events/${event.title}/vendors`} className='right sm:max-w-[10%]'>
                <button name='Vendors' className="bg-blue-500 dark:bg-gray-700 text-white shadow-gray-600 drop-shadow-lg dark:outline-1 dark:outline-gray-200 hover:bg-blue-400 dark:hover:bg-gray-600 rounded-lg px-4 py-2 mt-2">Vendors</button>
            </Link>
        </div>
    )
}