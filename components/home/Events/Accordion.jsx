import {Disclosure, Transition} from "@headlessui/react";
import EventCard from "./EventCard";
import EventAccordion from "@/components/home/Events/EventAccordion";

export default function Accordion({events}) {
    return (
        <div className='flex flex-wrap justify-center p-5 items-top mx-auto gap-5 m-auto'>
            {Object.values(events).map((event) => (
                <div key={event.title + ' accordion'} className='max-w-[320px]'>
                    <Disclosure >
                        {({ open }) => (
                            <div  className={`${open ? 'shadow-md' : ''} rounded-lg`}>
                                <Disclosure.Button as="div">
                                    <EventCard open={open} event={event}/>
                                </Disclosure.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Disclosure.Panel className=" max-w-[320px]">
                                        <EventAccordion event={event} />
                                    </Disclosure.Panel>
                                </Transition>
                            </div>
                        )}
                    </Disclosure>
                </div>
            ))}
        </div>
    )
}