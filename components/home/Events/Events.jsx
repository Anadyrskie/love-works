import Accordion from './Accordion'

import {Tab} from "@headlessui/react";
import EventCard from "@/components/home/Events/EventCard";
import EventPanel from "@/components/home/Events/EventPanel";
import Link from "next/link";

export function Events() {
    let days = {
        day1: {
            title: 'March 14',
            date: 'March 14th',
            time: '5:00 PM',
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
                    <p className='text-black dark:text-white text-2xl mb-0'>Join us for dinner in the desert at the
                        Cowpie!</p>
                    <p className='text-lg text-black dark:text-white mt-0'>
                        Enjoy live music, stargazing, and a bonfire jam session!
                        This is our third year offering this exciting event!
                    </p>
                    <h4 className='text-center mt-1 md:mt-0 text-xl md:text-lg'>
                        – BRING A CHAIR! –
                    </h4>
                    <h3 className='text-center'>– 2025 Schedule coming when we have it! –</h3>

                    {/*<div className='leading-6'>*/}
                    {/*    <div className="space-y-4">*/}
                    {/*        <div className="flex items-start">*/}
                    {/*            <div className="font-bold text-lg">4:00</div>*/}
                    {/*            <div className="ml-4 leading-6">*/}
                    {/*                Come on out and enjoy the gorgeous backdrop of the*/}
                    {/*                Sonoran Desert as we welcome our musical guests:*/}
                    {/*                <div className='flex flex-col text leading-7 text-lg'>*/}
                    {/*                    <span>1. The Kitchen Table Band</span>*/}
                    {/*                    <span>2. Tristan Thorndyke</span>*/}
                    {/*                    <span className='pl-2 text-base'>and our headline act</span>*/}
                    {/*                    <span>3. Southern Country Band</span>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*        <div className="flex items-start">*/}
                    {/*            <div className="font-bold text-lg">5:00</div>*/}
                    {/*            <div className="ml-4 leading-6">*/}
                    {/*                <p>Dinner provided by the*/}
                    {/*                    one and only Bunny LaGrand!*/}
                    {/*                    This year’s fare includes*/}
                    {/*                    pulled pork sandwiches, with a vegetarian option made from jack fruit that is to*/}
                    {/*                    die*/}
                    {/*                    for! Served with a side, a beverage, and dessert. <br/>*/}
                    {/*                </p>*/}
                    {/*                <p className='font-bold mb-0'>Tickets are required for food.</p>*/}
                    {/*                <p className='mt-0'>*/}
                    {/*                     Suggested donation $25. Tickets are available at*/}
                    {/*                    Ajo Copper News, Ajo Chamber of Commerce, and at the Saturday Mercado in Ajo’s*/}
                    {/*                    beautiful historic Plaza.*/}
                    {/*                </p>*/}


                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*        <div className="font-bold text-lg text-center">And that’s not all!</div>*/}

                    {/*        <div className="flex items-start">*/}
                    {/*            <span className="font-bold text-lg">7:00</span>*/}
                    {/*            <div className="ml-4 leading-6">*/}
                    {/*                Organ Pipe Cactus National Park rangers will join us again and guide us through*/}
                    {/*                the nighttime sky with laser pointers, telescopes and storytelling!*/}
                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*        <div className="flex items-start">*/}
                    {/*            <div className="font-bold text-lg">9:00</div>*/}
                    {/*            <div className="ml-4 leading-6">*/}
                    {/*                Bonfire jam session!*/}
                    {/*                Bring your instruments and voices. Sing along, tap your feet, and clap your*/}
                    {/*                hands as we sit by the fire and play beneath the stars.*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}


                    {/*    <p>*/}
                    {/*        This event is free and open to the public. Tickets are required for food only. Suggested*/}
                    {/*        donation*/}
                    {/*        $25.*/}
                    {/*        Tickets are available at Ajo Copper News, Ajo Chamber of Commerce, and at the Saturday Mercado*/}
                    {/*        in*/}
                    {/*        Ajo’s beautiful historic Plaza.*/}
                    {/*        <br />*/}
                    {/*        For more information, <Link href={'#contact'}>contact us</Link> at <Link href={'mailto:info@loveworksajo.com'}>info@loveworksajo.com</Link>.*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                </>
            ),
            button: (

                <Link target={`_blank`} rel={`noreferrer`} href={`https://goo.gl/maps/r3Rutja53veCsP319`}>
                    <button name='Directions'
                            className="text-shadow-sm bg-blue-500 dark:bg-gray-700 text-white shadow-gray-600 drop-shadow-lg dark:outline-1 dark:outline-gray-200 hover:bg-blue-400 dark:hover:bg-gray-600 rounded-lg px-4 py-2 mt-2">Directions
                    </button>
                </Link>
            )
        },
        day2: {
            time: '9AM - 8PM',
            title: 'March 15',
            date: 'March 15th',
            description: 'Live music, art, food, and fun in the historic Ajo Plaza',
            image: {
                url: '/loveworksPoster.jpeg', alt: 'Love Works Poster'
            },
            location: {
                name: 'Ajo Plaza', address: 'Address 2', link: 'https://maps.app.goo.gl/34mwPnUfhgn6hEgx5'
            },
            content: (
                <>
                    <p>Experience a day of music, art, food, and fun at Ajo Plaza on Saturday, March 9th. This
                        tri-cultural event celebrates the rich cultural heritage of the Ajo community and features a
                        variety of activities for all ages.</p>
                    <h3 className='text-center'>– 2025 Schedule coming when we have it! –</h3>
                    {/*<ul>*/}
                    {/*    <li>*/}
                    {/*        Check out the artisan booths and Native American vendors selling handcrafted items.*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        Sample delicious food from local favorites: Lena's Taqueria, JJs Aguas Frescas, and Manuels Eats serving frybread!*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        Hide from the sun and enjoy a cold drink in the all-ages Refreshment Zone, serving non-alcoholic beverages and snacks.*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        Local author, artist, and wellness practitioner Jovita Wallace is hosting a book signing from 4-6pm @ Bonzai Studio.*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        Get a move-on and get your groove on at the Three Nations Dance Party starting at 5pm, featuring Gerty and the T.O. Boyz and the Kitchen Table Band.*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                    {/*<p>Don't miss out on the fun! Bring your family, friends, and a chair, and spend the day experiencing the best of Ajo's culture and community.</p>*/}
                    {/*<h3 className='text-center'>Event Lineup</h3>*/}
                    {/*<table>*/}
                    {/*    <thead>*/}
                    {/*    <tr>*/}
                    {/*        <th>Time</th>*/}
                    {/*        <th>Band</th>*/}
                    {/*        <th>Location</th>*/}
                    {/*    </tr>*/}
                    {/*    </thead>*/}
                    {/*    <tbody>*/}
                    {/*    <tr>*/}
                    {/*        <td>9:00a</td>*/}
                    {/*        <td>Beth and Terry</td>*/}
                    {/*        <td>Ajo Plaza</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>10:00a</td>*/}
                    {/*        <td>Outta Hand</td>*/}
                    {/*        <td>Ajo Plaza</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>11:00a</td>*/}
                    {/*        <td>Diamonds and Rust</td>*/}
                    {/*        <td>Ajo Plaza</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>12:00p</td>*/}
                    {/*        <td>Priminition Trio</td>*/}
                    {/*        <td>Ajo Plaza</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>1:00p</td>*/}
                    {/*        <td>Gila River Basket Dancers</td>*/}
                    {/*        <td>Ajo Plaza</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>2:00p</td>*/}
                    {/*        <td>Peace Restored</td>*/}
                    {/*        <td>Ajo Plaza</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>3:00p</td>*/}
                    {/*        <td>Gertie and the T.O. Boyz</td>*/}
                    {/*        <td>Ajo Plaza</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>4:00p</td>*/}

                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>5:00p</td>*/}
                    {/*        <td>Kitchen Table Band*/}
                    {/*        <br />*/}
                    {/*            Mimi's Pizza*/}

                    {/*        </td>*/}
                    {/*        <td>Three Nations Market</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>6:00p</td>*/}
                    {/*        <td>3Nation Dance Party feat. Gertie and the T.O. Boyz</td>*/}
                    {/*        <td>Three Nations Market</td>*/}
                    {/*    </tr>*/}
                    {/*    </tbody>*/}
                    {/*</table>*/}
                    {/*<Link href={`/schedule#march11`}></Link>*/}
                </>
            ),
            // button: (
            //     <Link href={`/schedule#march11`}>
            //         <button name='Schedule' className="text-shadow-sm bg-blue-500 dark:bg-gray-700 text-white shadow-gray-600 drop-shadow-lg dark:outline-1 dark:outline-gray-200 hover:bg-blue-400 dark:hover:bg-gray-600 rounded-lg px-4 py-2 mt-2">Schedule</button>
            //     </Link>
            // )
        },
        day3: {
            time: '9AM-4PM',
            title: 'March 16', date: 'March 16th', description: `Explore what makes Ajo special: its unique culture and community!`, image: {
                url: '/AMountain.png', alt: 'Love Works Poster'
            },
            location: {
                name: 'Ajo Plaza', address: 'Address 3', link: 'https://maps.app.goo.gl/34mwPnUfhgn6hEgx5'
            },
            content: (
                <>
                    <h3>
                        SUNDAY FUN DAY
                    </h3>
                    <p>
                        The fun and music continue on Sunday, with a variety of activities. <br/>
                        More information to follow.
                    </p>
                    <h3 className='text-center'>– 2025 Schedule coming when we have it! –</h3>

                    {/*<h3 className='text-center'>Event Lineup</h3>*/}
                    {/*<table>*/}
                    {/*    <thead>*/}
                    {/*    <tr>*/}
                    {/*        <th>Time</th>*/}
                    {/*        <th>Event</th>*/}
                    {/*        <th>Location</th>*/}
                    {/*    </tr>*/}
                    {/*    </thead>*/}
                    {/*    <tbody>*/}
                    {/*    <tr>*/}
                    {/*        <td>9:00a</td>*/}
                    {/*        <td>Mimi's Community Breakfast<br />$12 / plate</td>*/}
                    {/*        <td>Ajo Community Golf Course</td>*/}
                    {/*        <td></td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>9:00a</td>*/}
                    {/*        <td>Bird watching with Organ Pipe Nat'l Monument Rangers</td>*/}
                    {/*        <td>Ajo Community Golf Course</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>10:00a</td>*/}
                    {/*        <td>Kitchen Table Band</td>*/}
                    {/*        <td>Ajo Plaza</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>11:00a</td>*/}
                    {/*        <td>Bonzai Studio Tap Crew</td>*/}
                    {/*        <td>Ajo Plaza</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>12:00p</td>*/}
                    {/*        <td>Dialectic Flowers</td>*/}
                    {/*        <td>Ajo Plaza</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>1:00p</td>*/}
                    {/*        <td>Coyote Callback presents:<br />Beauty and the Beast, a one-act play</td>*/}
                    {/*        <td>Ajo Chamber of Commerce</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>2:00p</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>3:00p</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>4:00p</td>*/}
                    {/*        <td>Crystal Bowl Meditation<br />$15 / person</td>*/}
                    {/*        <td>Bonzai Studio</td>*/}
                    {/*    </tr>*/}
                    {/*    </tbody>*/}
                    {/*</table>*/}
                </>
            ),
            // button: (
            //     <Link href={`/schedule#march12`}>
            //         <button name='Schedule' className="text-shadow-sm bg-blue-500 dark:bg-gray-700 text-white shadow-gray-600 drop-shadow-lg dark:outline-1 dark:outline-gray-200 hover:bg-blue-400 dark:hover:bg-gray-600 rounded-lg px-4 py-2 mt-2">Schedule</button>
            //     </Link>
            // )
        }
    }


    return (
        <div className='py-3 md:pt-5 md:pb-10 flex flex-col items-center justify-center' id='events'>
            <div className='lg:hidden'>
                <Accordion event={days.day1} className={``}>
                    <div>
                        {days.day1.content}
                    </div>
                    <div className='flex flex-col items-center mt-2'>
                        {days.day1.button}
                    </div>
                </Accordion>
                <Accordion event={days.day2}>
                    <div>
                        {days.day2.content}
                    </div>
                    <div className='flex flex-col items-center mt-2'>
                        {days.day2.button}
                    </div>
                </Accordion>
                <Accordion event={days.day3}>
                    <div>
                        {days.day3.content}
                    </div>
                    <div className='flex flex-col items-center mt-2'>
                        {days.day3.button}
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
                                <EventPanel key={days.day1.title + ' panel'} className='w-[80%] px-10 py-3 m-auto' event={days.day1} button={days.day1.button}>
                                    {days.day1.content}
                                </EventPanel>
                                <EventPanel className='w-[80%] px-10 py-3 m-auto' key={days.day2.title + ' panel'} event={days.day2} button={days.day2.button}>
                                    {days.day2.content}
                                </EventPanel>
                                <EventPanel className='w-[80%] px-10 py-3 m-auto' key={days.day3.title + ' panel'} event={days.day3} button={days.day3.button}>
                                    {days.day3.content}
                                </EventPanel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
            {/*<Link className={`pt-5`} href={`/schedule`}>*/}
            {/*    <button name='Full Schedule' className="bg-blue-500 dark:bg-gray-700 text-white shadow-gray-600 drop-shadow-lg dark:outline-1 dark:outline-gray-200 hover:bg-blue-400 dark:hover:bg-gray-600 rounded-lg px-4 py-2 mt-2">Full Schedule</button>*/}
            {/*</Link>*/}

        </div>
        )
}
export default Events