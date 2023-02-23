import {Disclosure, Transition} from "@headlessui/react";
import EventCard from "./EventCard";

export default function Accordion(props) {
    const {event} = props
    return (
        <div className='m-auto mx-auto flex flex-wrap justify-center gap-5 p-5 items-top'>
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
                                    <Disclosure.Panel className="max-w-[320px]">
                                        <div className='z-50 m-auto mx-auto flex flex-wrap justify-center gap-5 rounded-b-lg border border-gray-200 p-5 shadow-md border-1 items-top dark:border-gray-700 dark:text-white'>
                                            <div className='max-w-[320px]'>
                                                {props.children}
                                            </div>
                                        </div>
                                    </Disclosure.Panel>
                                </Transition>
                            </div>
                        )}
                    </Disclosure>
                </div>
        </div>
    )
}