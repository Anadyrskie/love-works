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


const events = {
    march10: {
        title: 'March 10',
        date: 'March 10th',
        time:'5:30-9:00 PM',
        description: 'Food, music, stargazing and fun on Ajo\'s Scenic Loop. Don\'t miss it!',
        image: {
            url: '/firesideJam.jpeg', alt: 'Love Works Poster'
        },
        location: {
            name: 'Cowpie', address: 'Address 1', link: '#'
        },
        panel: {
            title: 'Day 1',
            p1: 'Get ready for an unforgettable evening of stargazing and toe-tapping tunes! Bring your chair, your instrument, and your appetite because Organ Pipe Cactus National Monument is providing the telescopes while The Kitchen Table Band (Ajo\'s premier Hillbilly Swing band) heats up the night with live music while you eat. Afterward, settle in for a fireside jam session like you haven\'t seen since the Year of the Big Onions!',
            p2 : 'Suggested Donation – $25',
            p3 : 'Tickets available by donation at the Ajo Copper News, Chamber of Commerce, and the Sonoran Desert Conference Center.'

        }
    },

    march11: {
        title: 'March 11', date: 'March 11th', description: 'Live music in the historic Ajo Plaza', image: {
            url: '/loveworksPoster.jpeg', alt: 'Love Works Poster'
        },
        location: {
            name: 'Ajo Plaza', address: 'Address 2', link: '#'
        },
        panel: {
            title: 'Day 1',
            p1: 'This card is still under construction.',
            p3: "When it's done it will have a list of all the events for the day",

        }
    },
    march12: {
        title: 'March 12', date: 'March 12th', description: 'Outdoor dance at 3 Nations Market', image: {
            url: '/loveworksPoster.jpeg', alt: 'Love Works Poster'
        },
        location: {
            name: '3 Nations', address: 'Address 3', link: '#'
        },
        panel: {
            title: 'Day 1',
            p1: 'This card is still under construction.',
            p3: "When it's done it will have a list of all the events for the day",

        }
    }
}

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