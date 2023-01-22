import {Disclosure} from "@headlessui/react";
import EventCard from "./EventCard";
import EventAccordion from "@/components/home/Events/EventAccordion";

export default function Accordion({events}) {
    return (
        <div className='flex flex-wrap justify-center p-5 items-top mx-auto gap-5 m-auto'>
            {events.map((event) => (
                <div key={event.title + ' accordion'} className='max-w-[320px]'>
                    <Disclosure >
                        {({ open }) => (
                            <div  className={`${open ? 'shadow-md' : ''} rounded-lg`}>
                                <Disclosure.Button as="div">
                                    <EventCard open={open} event={event}/>
                                </Disclosure.Button>
                                <Disclosure.Panel className=" max-w-[320px]">
                                    <EventAccordion event={event} />
                                </Disclosure.Panel>
                            </div>
                        )}
                    </Disclosure>
                </div>
            ))}
        </div>
    )
}