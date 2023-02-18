import Accordion from './Accordion'

import Tabs from "@/components/home/Events/Tabs";
import {events} from "@/public/events/days";
import {Tab} from "@headlessui/react";
import EventCard from "@/components/home/Events/EventCard";
import EventPanel from "@/components/home/Events/EventPanel";

export function Events() {
    return (
        <div className='py-3 md:pt-5 md:pb-10' id='events'>
            <div className='lg:hidden'>
                <Accordion event={events.march10}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p>Get ready for an unforgettable evening of stargazing and toe-tapping tunes out at Cowpie Mountain! Bring your chair, your instrument, and your appetite because Organ Pipe Cactus National Monument is providing the telescopes while The Kitchen Table Band (Ajo's premier Hillbilly Swing band) heats up the night with live music while you eat. Afterward, settle in for a fireside jam session like you haven't seen since the Year of the Big Onions!</p>
                    <h2 className='mt-2 text-xl font-bold text-center'>Suggested Donation – $25</h2>
                    <p className='mt-2'>Tickets available by donation at the Ajo Copper News, Chamber of Commerce, and the Sonoran Desert Conference Center.</p>
                </Accordion>
                <Accordion event={events.march11}>
                    <h2 className={`text-xl text-center font-bold`}>Featured Bands</h2>
                    <ul className='mt-2 px-20 list-disc'>{bands.map((band) =>{
                        return (
                            <li key={band}>{band}</li>
                        )
                    })}</ul>
                    <p className='mt-2'>Check back for a schedule!</p>
                </Accordion>
                <Accordion event={events.march12}>
                    <p>Check back for more information.</p>
                </Accordion>

            </div>
            <div className='max-lg:hidden w-full'>
                <div className='bg-white dark:bg-gray-800 mx-auto m-auto'>
                    <Tab.Group>
                        <Tab.List className="bg-white justify-center flex dark:bg-gray-800 columns-3 p-5">

                            {Object.values(events).map((event) => (
                                <Tab
                                    key={event.title + ' tab'}
                                    as="div"
                                    className={`text-gray-800 font-medium rounded-lg px-3 py-2 focus-visible:none focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-400`}
                                >
                                    {({ selected }) => (
                                        <EventCard selected={selected} event={event} />
                                    )}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels >
                                <EventPanel key={events.march10.name + ' panel'} className='w-[80%] px-10 py-3 m-auto' event={events.march10}>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <p>Get ready for an unforgettable evening of stargazing and toe-tapping tunes out at Cowpie Mountain! Bring your chair, your instrument, and your appetite because Organ Pipe Cactus National Monument is providing the telescopes while The Kitchen Table Band (Ajo's premier Hillbilly Swing band) heats up the night with live music while you eat. Afterward, settle in for a fireside jam session like you haven't seen since the Year of the Big Onions!</p>
                                    <h2 className='mt-2 text-xl font-bold text-center'>Suggested Donation – $25</h2>
                                    <p className='mt-2'>Tickets available by donation at the Ajo Copper News, Chamber of Commerce, and the Sonoran Desert Conference Center.</p>
                                </EventPanel>
                                <EventPanel className='w-[80%] px-10 py-3 m-auto' key={events.march11.name + ' panel'} event={events.march11}>
                                    <h2 className={`text-xl text-center font-bold`}>Featured Bands</h2>
                                    <ul className='mt-2 px-20 list-disc'>{bands.map((band) =>{
                                        return (
                                            <li key={band}>{band}</li>
                                        )
                                    })}</ul>
                                    <p className='mt-2'>Check back for a schedule!</p>
                                </EventPanel>
                                <EventPanel className='w-[80%] px-10 py-3 m-auto' key={events.march12.name + ' panel'} event={events.march12}>
                                    <p>{events.march12.panel.p1}</p>
                                    <h2 className='mt-2 text-xl font-bold text-center'>{events.march12.panel.p2}</h2>
                                    <p className='mt-2'>{events.march12.panel.p3}</p>
                                </EventPanel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
        )
}
export default Events

const bands = [
    "Gertie N the T.O. Boyz Waila Band",
    "Zaniel and the T.O. Nation",
    "Desert Glass",
    "Dialectic Flowers",
    "Peace Restored",
    "Priminition",
    "Folklorica",
    "Beth and Terry",
    "Fly By Night",
    "KTB",
    "Tony's Martini Club"
]

/*
    {
        title: '',
        date: '',
        description: '',
        image: {
            url: '',
            alt: ''
        },
        location: {name: '', address: '', link: ''},
    },
 */