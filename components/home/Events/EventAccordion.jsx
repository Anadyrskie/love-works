export default function EventAccordion({event}) {
    return (
        <div className='flex z-50 flex-wrap border rounded-b-lg dark:text-white border-1 border-gray-200 dark:border-gray-700 shadow-md justify-center p-5 items-top mx-auto gap-5 m-auto'>
            <div className='max-w-[320px]'>
                <p>{event.panel.p1}</p>
                <h2 className='mt-2 text-xl font-bold text-center'>{event.panel.p2}</h2>
                <p className='mt-2'>{event.panel.p3}</p>
            </div>
        </div>
    )
}