import {Disclosure} from "@headlessui/react";
import EventCard from "./EventCard";
import EventPanel from "./EventPanel";
export default function EventAccordion({event}) {
    return (
        <div className='flex z-50 flex-wrap shadow-md justify-center p-5 items-top mx-auto gap-5 m-auto'>
            <div className='max-w-[320px]'>
            <h1 className='text-2xl font-bold text-center'>{event.title}</h1>
                <p>{event.panel.p1}</p>
            </div>
        </div>
    )
}