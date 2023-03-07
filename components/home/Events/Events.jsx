import Accordion from './Accordion'

import {Tab} from "@headlessui/react";
import EventCard from "@/components/home/Events/EventCard";
import EventPanel from "@/components/home/Events/EventPanel";
import Link from "next/link";

export function Events() {
    let days = {
        march10: {
            title: 'March 10',
            date: 'March 10th',
            time: '5:30-9:00 PM',
            description: 'Food, music, stargazing and fun on Ajo\'s Scenic Loop. Don\'t miss it!',
            image: {
                url: '/firesideJam.jpeg', alt: 'Love Works Poster'
            },
            location: {
                                                    /* the link is defined both here and in the button */
                name: 'Cowpie', address: 'Address 1', link: 'https://goo.gl/maps/r3Rutja53veCsP319'
            },
            content: (
                <>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p>Get ready for an unforgettable evening of stargazing and toe-tapping tunes out at Cowpie Mountain! Bring your chair, your instrument, and your appetite because Organ Pipe Cactus National Monument is providing the telescopes while The Kitchen Table Band (Ajo's premier Hillbilly Swing band) heats up the night with live music while you eat. Afterward, settle in for a fireside jam session like you haven't seen since the Year of the Big Onions!</p>
                    <h2 className='mt-2 text-xl font-bold text-center'>Suggested Donation – $25</h2>
                    <p className='mt-2'>Tickets available by donation at the Ajo Copper News and Chamber of Commerce.</p>
                </>
            ),
            button: (

                <Link target={`_blank`} rel={`noreferrer`} href={`https://goo.gl/maps/r3Rutja53veCsP319`} >
                    <button name='Directions' className="bg-blue-500 dark:bg-gray-700 text-white shadow-gray-600 drop-shadow-lg dark:outline-1 dark:outline-gray-200 hover:bg-blue-400 dark:hover:bg-gray-600 rounded-lg px-4 py-2 mt-2">Directions</button>
                </Link>
            )
        },
        march11: {
            time: '9AM - ??',
            title: 'March 11', date: 'March 11th', description: 'Live music in the historic Ajo Plaza', image: {
                url: '/loveworksPoster.jpeg', alt: 'Love Works Poster'
            },
            location: {
                name: 'Ajo Plaza', address: 'Address 2', link: 'https://goo.gl/maps/m2tdgxzUfwTLbSVDA'
            },
            content: (
                <>
                    <h2 className={`text-xl text-center font-bold`}>Featured Bands</h2>
                    <ul className='mt-2 px-20 list-disc'>{bands.map((band) =>{
                        return (
                            <li key={band}>{band}</li>
                        )
                    })}</ul>
                    <p className='mt-2'>Check back for a schedule!</p>
                </>
            ),
            button: (
                <Link href={`/vendors`}>
                    <button name='Vendors' className="bg-blue-500 dark:bg-gray-700 text-white shadow-gray-600 drop-shadow-lg dark:outline-1 dark:outline-gray-200 hover:bg-blue-400 dark:hover:bg-gray-600 rounded-lg px-4 py-2 mt-2">Vendors</button>
                </Link>
            )
        },
        march12: {
            time: 'All day',
            title: 'March 12', date: 'March 12th', description: 'Explore what Ajo has to offer!', image: {
                url: '/AMountain.png', alt: 'Love Works Poster'
            },
            location: {
                name: 'Ajo', address: 'Address 3', link: 'https://goo.gl/maps/8aycuyMiEPG341HP8'
            },
            content: (
                <>
                    <br />
                    <p>
                        Join us for a day of exploration and fun in Ajo! Start your day off right with Mimi's weekly Sunday Community Breakfast, featuring music by Beth and Terry. Afterwards, check out the fruit tree propagation workshop with Jesus Garcia or join the Orpi Rangers for some birding at Quitoboquito. There will also be plenty of opportunities to explore local stores and galleries, as well as a history walk with Bill Perry. Finish off the day with a crystal bowl healing session at Bonzai Studio. Don't miss out on this exciting day in Ajo!
                    </p>
                </>
            ),
            button: (<> </>)
        }
    }


    return (
        <div className='py-3 md:pt-5 md:pb-10 flex flex-col items-center justify-center' id='events'>
            <div className='lg:hidden'>
                <Accordion event={days.march10} className={``}>
                    <div>
                        {days.march10.content}
                    </div>
                    <div className='flex flex-col items-center mt-2'>
                        {days.march10.button}
                    </div>
                </Accordion>
                <Accordion event={days.march11}>
                    <div>
                        {days.march11.content}
                    </div>
                    <div className='flex flex-col items-center mt-2'>
                        {days.march11.button}
                    </div>
                </Accordion>
                <Accordion event={days.march12}>
                    <div>
                        {days.march12.content}
                    </div>
                    <div className='flex flex-col items-center mt-2'>
                        {days.march12.button}
                    </div>
                </Accordion>

            </div>
            <div className='max-lg:hidden w-full'>
                <div className='bg-white dark:bg-gray-800 mx-auto m-auto'>
                    <Tab.Group>
                        <Tab.List className="bg-white justify-center flex dark:bg-gray-800 columns-3 p-5">

                            {Object.values(days).map((event) => (
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
                                <EventPanel key={days.march10.name + ' panel'} className='w-[80%] px-10 py-3 m-auto' event={days.march10} button={days.march10.button}>
                                    {days.march10.content}
                                </EventPanel>
                                <EventPanel className='w-[80%] px-10 py-3 m-auto' key={days.march11.name + ' panel'} event={days.march11} button={days.march11.button}>
                                    {days.march11.content}
                                </EventPanel>
                                <EventPanel className='w-[80%] px-10 py-3 m-auto' key={days.march12.name + ' panel'} event={days.march12} button={days.march12.button}>
                                    {days.march12.content}
                                </EventPanel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
            <Link className={`pt-5`} href={`/schedule`}>
                <button name='Full Schedule' className="bg-blue-500 dark:bg-gray-700 text-white shadow-gray-600 drop-shadow-lg dark:outline-1 dark:outline-gray-200 hover:bg-blue-400 dark:hover:bg-gray-600 rounded-lg px-4 py-2 mt-2">Full Schedule</button>
            </Link>

        </div>
        )
}
export default Events

const bands = [
    "Gertie N the T.O. Boyz Waila Band",
    "Zaniel and the T.O. Natives",
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