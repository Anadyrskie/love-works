import {Disclosure, Transition} from "@headlessui/react";
import EventCard from "./EventCard";

export default function Accordion(props) {
    const {event} = props
    return (
        <div className='flex flex-wrap justify-center p-5 items-top mx-auto gap-5 m-auto'>
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
                                        <div className='flex z-50 prose dark:prose-invert flex-wrap border rounded-b-lg dark:text-white border-1 border-gray-200 dark:border-gray-700 shadow-md justify-center p-5 items-top mx-auto gap-5 m-auto'>
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