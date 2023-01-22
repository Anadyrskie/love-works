import { Disclosure } from '@headlessui/react'
import AccordionEvents from './Accordion'

import Tabs from "@/components/home/Events/Tabs";
export function Events() {
    return (
        <div className='py-3 md:pt-5 md:pb-10' id='events'>
            <div className='lg:hidden'>
                <AccordionEvents events={events} />
            </div>
            <div className='max-lg:hidden w-full'>
                <Tabs events={events} />
            </div>
        </div>
        )
}
export default Events


const events = [
    {
        title: 'Day 1',
        date: 'March 10th',
        description: 'Dinner and live music out at Cowpie Mountain',
        image: {
            url: '/loveworksPoster.jpeg',
            alt: 'Love Works Poster'
        },
        location: {name: 'Cowpie', address: 'Address 1', link: 'https://google.com'},
        panel: {
            title: 'Day 1',
            p1: 'A brief description of the event that will for sure be displayed on all screens.',
            p2: 'this paragraph should be seen on all screens unless I think the whole thing is too long',
            p3: 'make this paragraph unimportant, it may not be displayed on all screens.',

        }
    },
    {
        title: 'Day 2',
        date: 'March 11th',
        description: 'Live music in the historic Ajo Plaza',
        image: {
            url: '/loveworksPoster.jpeg',
            alt: 'Love Works Poster'
        },
        location: {name: 'Ajo Plaza', address: 'Address 2', link: 'https://google.com'},
        panel: {
            title: 'Day 1',
            p1: 'A brief description of the event that will for sure be displayed on all screens.',
            p2: 'this paragraph should be seen on all screens unless I think the whole thing is too long',
            p3: 'make this paragraph unimportant, it may not be displayed on all screens.',

        }
    },
    {
        title: 'Day 3',
        date: 'March 12th',
        description: 'Outdoor dance at 3 Nations Market',
        image: {
            url: '/loveworksPoster.jpeg',
            alt: 'Love Works Poster'
        },
        location: {name: '3 Nations', address: 'Address 3', link: 'https://google.com'},
        panel: {
            title: 'Day 1',
            p1: 'A brief description of the event that will for sure be displayed on all screens.',
            p2: 'this paragraph should be seen on all screens unless I think the whole thing is too long',
            p3: 'make this paragraph unimportant, it may not be displayed on all screens.',

        }
    }
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