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
            description: 'Music, art, delicious food, and a community potluck under the stars at Ajo’s Scenic Loop!',
            image: {
                url: '/firesideJam.jpeg', alt: 'Cow Pie Community Potluck Poster'
            },
            location: {
                name: 'Cow Pie', address: 'Ajo’s Scenic Loop behind A Mountain', link: 'https://goo.gl/maps/r3Rutja53veCsP319'
            },
            content: (
                <>
                    <p className='text-black dark:text-white text-2xl mb-0'>Join us for the inaugural Cow Pie Community Potluck!</p>
                    <p className='text-lg text-black dark:text-white mt-0'>
                        A night of music, delicious food, and stargazing—all set against the stunning desert landscape.
                        Sponsored by Olsen’s Marketplace, this event is the perfect way to kick off the weekend.
                    </p>
                    <h4 className='text-center mt-1 md:mt-0 text-xl md:text-lg'>
                        – BRING A CHAIR & A DISH TO SHARE! –
                    </h4>

                    <div className='leading-6'>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="font-bold text-lg">5:00</div>
                                <div className="ml-4 leading-6">
                                    Music starts! Enjoy performances from:
                                    <div className='flex flex-col text leading-7 text-lg'>
                                        <span>1. Peace Restored</span>
                                        <span>2. Bonzai Dance Crew</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="font-bold text-lg">6:00</div>
                                <div className="ml-4 leading-6">
                                    Potluck begins! Olsen’s Marketplace is generously providing hotdogs, hamburgers,
                                        and all the fixings. We invite our amazing Ajo Community to bring along a dish to share.
                                </div>
                            </div>

                            <div className="flex items-start">
                                <span className="font-bold text-lg">7:00</span>
                                <div className="ml-4 leading-6">
                                    Rangers from Organ Pipe Cactus National Monument will be on-site, guiding us through
                                    the wonders of the night sky with telescopes and storytelling.
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="font-bold text-lg">9:00</div>
                                <div className="ml-4 leading-6">
                                    Bonfire jam session! Bring your instruments, your voice, and your rhythm.
                                    Join in, sing along, and enjoy the warmth of music and community under the stars.
                                </div>
                            </div>
                        </div>

                        <p className='text-xl'>
                            This event is free and open to the public! Bring a dish to share and your favorite chair. <br />
                            For more information, contact us at <Link href={'mailto:info@loveworksajo.com'}>info@loveworksajo.com</Link>
                        </p>
                    </div>
                </>
            ),
            button: (
                <Link target={`_blank`} rel={`noreferrer`} href={`https://goo.gl/maps/r3Rutja53veCsP319`}>
                    <button name='Directions'
                            className="text-shadow-sm bg-blue-500 dark:bg-gray-700 text-white shadow-gray-600 drop-shadow-lg dark:outline-1 dark:outline-gray-200 hover:bg-blue-400 dark:hover:bg-gray-600 rounded-lg px-4 py-2 mt-2">
                        Directions
                    </button>
                </Link>
            )
        },
        day2: {
            time: '9AM - 8PM',
            title: 'March 15',
            date: 'March 15th',
            description: 'A full day of arts, food, and live music in the historic Ajo Plaza!',
            image: {
                url: '/loveworksPoster.jpeg', alt: 'Love Works Poster'
            },
            location: {
                name: 'Ajo Plaza', address: 'Ajo Plaza, Address 2', link: 'https://maps.app.goo.gl/34mwPnUfhgn6hEgx5'
            },
            content: (
                <>
                    <p>Come spend the day in Ajo Plaza enjoying live music, local art, delicious food, and community fun!</p>
                    <p>Browse through booths filled with one-of-a-kind handcrafted pieces, including jewelry, paintings, photography, ceramics, clothing, and more.</p>

                    <h3 className='text-center'>– BRING A CHAIR AND STAY ALL DAY! –</h3>

                    <div className='leading-6'>
                        <h4 className="font-bold text-lg text-center">Food Vendors</h4>
                        <p>Grab a bite from one of our fantastic food vendors located in the plaza:</p>
                        <ul className=" space-y-1 capitalize">
                            <li>Nina’s Kitchen</li>
                            <li>The Chu Chu Club</li>
                            <li>Lena’s Taqueria</li>
                            <li>Manuel Brothers Eats</li>
                            <li>Mimi’s Breakfast Burritos & Sandwiches</li>
                            <li>Ajo Sno</li>
                        </ul>
                        <p>Or check out Ajo’s locally owned restaurants, including </p>
                        <ul className='flex flex-col space-y-1'>
                            <li>
                                <Link href={'https://maps.app.goo.gl/Em4dxoQypoF748Tt9'} target={'_blank'}>Oasis Coffee</Link>
                            </li>
                            <li>
                                <Link href={'https://maps.app.goo.gl/f6fC3V3zq27fbHAz6'} target={'_blank'}>Tacos El
                                    Tarasco</Link>
                            </li>
                            <li>
                                <Link target={'_blank'} href={'https://maps.app.goo.gl/2QFTZTjvmSqbYpDk8'}>
                                Agave Grill</Link>
                        </li>
                        <li>
                            and <Link href={'https://maps.app.goo.gl/nhKx7Lzv9gxYBWJX9'} target={'_blank'}>Fat Cactus
                            Pizza</Link>
                        </li>
                    </ul>

                    <h4 className="font-bold text-lg text-center mt-4">Live Music & Performances</h4>
                    <p>Enjoy a full lineup of live entertainment throughout the day!</p>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="font-bold text-lg text-nowrap">9:00 AM</div>
                            <div className="ml-4 leading-6">
                                Ballet Folklorico – Traditional Mexican dance performance
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="font-bold text-lg text-nowrap">10:00 AM</div>
                            <div className="ml-4 leading-6">Peace Restored</div>
                        </div>

                        <div className="flex items-start">
                            <div className="font-bold text-lg text-nowrap">11:00 AM</div>
                            <div className="ml-4 leading-6">Outta Hand</div>
                        </div>

                        <div className="flex items-start">
                            <div className="font-bold text-lg text-nowrap">12:00 PM</div>
                            <div className="ml-4 leading-6">3rd Gate / BK</div>
                        </div>

                        <div className="flex items-start">
                            <div className="font-bold text-lg text-nowrap">1:00 PM</div>
                            <div className="ml-4 leading-6">Diamonds and Rust</div>
                        </div>

                        <div className="flex items-start">
                            <div className="font-bold text-lg text-nowrap">2:00 PM</div>
                            <div className="ml-4 leading-6">Second Chance</div>
                        </div>

                        <div className="flex items-start">
                            <div className="font-bold text-lg text-nowrap">3:00 PM</div>
                            <div className="ml-4 leading-6">Laura Villegas</div>
                        </div>

                        <div className="flex flex-row items-start">
                            <div className="font-bold text-lg text-nowrap">4:00 PM</div>
                            <div className="ml-4 leading-6">Priminition</div>
                        </div>
                    </div>

                    <h4 className="font-bold text-lg text-center mt-4">Evening Events</h4>

                    <div className="flex items-start ">
                        <div className="font-bold text-lg text-nowrap">5:00 PM</div>
                        <div className="ml-4 leading-6">
                            Open Mic hosted by Curley Coffee with MC Bobby Narcho!
                            Come share your talents or just enjoy the performances.
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="font-bold text-lg text-nowrap">6:00 PM</div>
                        <div className="ml-4 leading-6">
                            <span>Saturday Night Dance Party at Three Nations</span><br/>
                            Featuring Southern Country Band—get ready to dance the night away!
                            Three Nations will also be open for shopping, so check out the 30+ vendors while you’re
                            there!
                        </div>
                    </div>

                    <p className="mt-4 text-xl">This event is free and open to the public! Bring your friends and family
                        for a full day of fun.</p>
                    <p className='text-xl'>For more information, contact us at <Link
                        href={'mailto:info@loveworksajo.com'}>info@loveworksajo.com</Link>.</p>
                </div>
</>
),
    button: (
        <Link target={`_blank`} rel={`noreferrer`} href={`https://maps.app.goo.gl/34mwPnUfhgn6hEgx5`}>
            <button name='Directions'
                    className="text-shadow-sm bg-blue-500 dark:bg-gray-700 text-white shadow-gray-600 drop-shadow-lg dark:outline-1 dark:outline-gray-200 hover:bg-blue-400 dark:hover:bg-gray-600 rounded-lg px-4 py-2 mt-2">
                Directions
            </button>
        </Link>
    )
},
    day3: {
        time: '9AM - 4PM',
            title
    :
        'March 16',
            date
    :
        'March 16th',
            description
    :
        'A day of relaxation, family fun, and reflection to close out the festival.',
            image
    :
        {
            url: '/AMountain.png', alt: 'Love Works Poster'
            },
            location: {
                name: 'Ajo Plaza', address: 'Ajo Plaza, Address 3', link: 'https://maps.app.goo.gl/34mwPnUfhgn6hEgx5'
            },
            content: (
                <>
                    <h3 className='text-center'>SUNDAY FUN DAY</h3>
                    <p>As the festival winds down, join us for a day focused on family, relaxation, and mindful enjoyment.</p>

                    <h4 className="font-bold text-lg text-center">Morning Activities</h4>

                    <div className="flex items-start">
                        <div className="font-bold text-lg">9:00 AM</div>
                        <div className="ml-4 leading-6">
                            Bird Watching with Rangers from Organ Pipe National Monument at Ajo Community Golf Course.<br/>
                            <span className="text-sm">Rangers will help identify birds and provide binoculars to share. If you have your own, please bring them!</span>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="font-bold text-lg">9:00 AM</div>
                        <div className="ml-4 leading-6">
                            Family Yoga Session at Ajo Plaza – Stretch and unwind together.
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="font-bold text-lg">9:00 AM - 12:00 PM</div>
                        <div className="ml-4 leading-6">
                            Mimi’s Sunday Brunch at Ajo Community Golf Course – Enjoy a delicious breakfast ($12/plate).
                        </div>
                    </div>

                    <h4 className="font-bold text-lg text-center mt-4">Midday Events</h4>

                    <div className="flex items-start">
                        <div className="font-bold text-lg">10:00 AM - 12:00 PM</div>
                        <div className="ml-4 leading-6">
                            Music, Coffee, and Crepes – Featuring live music from Salt of the Earth.<br/>
                            Enjoy delicious crepes from Ajo Eats and hot coffee from Curley Coffee. Other beverages and baked goods available.
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="font-bold text-lg">10:00 AM - 2:00 PM</div>
                        <div className="ml-4 leading-6">
                            Take-Away Art Activities and Lawn Games – Perfect for families and kids of all ages!
                        </div>
                    </div>

                    <h4 className="font-bold text-lg text-center mt-4">Afternoon & Closing Event</h4>

                    <div className="flex items-start">
                        <div className="font-bold text-lg">3:00 PM</div>
                        <div className="ml-4 leading-6">
                            Crystal Bowls Meditation at Bonzai Studio with Jovita Wallace – $10 per person.<br/>
                            A peaceful sound-healing experience to close the weekend on a serene note.
                        </div>
                    </div>

                    <p className="mt-4 text-xl">This event is free and open to the public! Bring your family and friends for a relaxing end to the festival.</p>
                    <p className='text-xl'>For more information, contact us at <Link href={'mailto:info@loveworksajo.com'}>info@loveworksajo.com</Link>.</p>
                </>
            ),
            button: (
                <Link target={`_blank`} rel={`noreferrer`} href={`https://maps.app.goo.gl/34mwPnUfhgn6hEgx5`}>
                    <button name='Directions'
                            className="text-shadow-sm bg-blue-500 dark:bg-gray-700 text-white shadow-gray-600 drop-shadow-lg dark:outline-1 dark:outline-gray-200 hover:bg-blue-400 dark:hover:bg-gray-600 rounded-lg px-4 py-2 mt-2">
                        Directions
                    </button>
                </Link>
            )
        },
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