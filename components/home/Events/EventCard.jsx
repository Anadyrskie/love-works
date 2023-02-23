import Image from 'next/image'

export function EventCard({event, open, selected}) {
    return (
        <div
            className={`flex z-10 p-4 border max-w-[320px] sm:min-h-[8em]  dark:shadow-lg ` +
                `flex-row hover:bg-gray-100 dark:border-gray-700  dark:hover:bg-gray-700 cursor-pointer ` +
        `${open ? 'rounded-t-lg border-b-[0px]' : 'rounded-lg shadow-md'} ${selected ? 'shadow-[0_10px_25px_7px_rgba(0,0,0,0.2)] dark:bg-gray-700' : ''} transition-all`}>
            <div className='inline-block'>
                <Image className="shadow-md rounded-[25px]"
                       src={event.image.url}
                       alt={event.image.alt}
                       width={100}
                       height={100}
                />
            </div>
            <div className="ml-4 flex inline-flex flex-col leading-normal w-[80%]">
                <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"> {event.title}</h3>
                <div>
                    <span className={`text-gray-700 dark:text-gray-400 ${selected ? 'dark:text-gray-300' : ''} items-center`}>
                        <svg className={'fill-gray-500 dark:fill-gray-600 w-[1em] h-[1em] inline-block'} viewBox="0 0 395.71 395.71">
                            <g>
                                <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
                            </g>
                        </svg>
                        <p className="ml-1 inline-block">{event.location.name}</p>
                    </span>
                    {event.time ? <h6 className={`text-sm tracking-tight text-gray-700 dark:text-gray-400 ${selected ? 'dark:text-gray-300' : ''}`}> {event.time}</h6> : ''}
                </div>
                <p className="mt-1 font-normal text-gray-900 dark:text-white">{event.description}</p>
            </div>
        </div>
    )
}

export default EventCard