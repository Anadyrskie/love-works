import EventCard from "./EventCard";
import {Tab} from "@headlessui/react";
import EventPanel from "@/components/home/Events/EventPanel";

export default function Tabs({events}) {
    return (
        <div className='m-auto mx-auto bg-white dark:bg-gray-800'>
            <Tab.Group>
                <Tab.List className="flex columns-3 justify-center bg-white p-5 dark:bg-gray-800">

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
                            <Tab.Panel className='m-auto px-10 py-3 w-[80%]' key={events.march10.name + ' panel'}>
                                <EventPanel event={events.march10}>
                                    <p className="mt-t">{events.march10.panel.p1}</p>
                                    <p className="mt-2 text-center text-lg font-bold">{events.march10.panel.p2}</p>
                                    <p className="mt-2 font-normal dark:text-white">{events.march10.panel.p3}</p>
                                </EventPanel>
                            </Tab.Panel>
                            <Tab.Panel className='m-auto px-10 py-3 w-[80%]' key={events.march11.name + ' panel'}>
                                <EventPanel event={events.march11}>
                                    <p>{events.march11.panel.p1}</p>
                                    <h2 className='mt-2 text-center text-xl font-bold'>{events.march11.panel.p2}</h2>
                                    <p className='mt-2'>{events.march11.panel.p3}</p>
                                </EventPanel>
                            </Tab.Panel>
                            <Tab.Panel className='m-auto px-10 py-3 w-[80%]' key={events.march12.name + ' panel'}>
                                <EventPanel event={events.march12}>
                                    <p>{events.march12.panel.p1}</p>
                                    <h2 className='mt-2 text-center text-xl font-bold'>{events.march12.panel.p2}</h2>
                                    <p className='mt-2'>{events.march12.panel.p3}</p>
                                </EventPanel>
                            </Tab.Panel>
                        </Tab.Panels>
            </Tab.Group>
        </div>
    )
}


/*
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex rounded-xl bg-blue-900/20 p-1 space-x-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex text-xs font-normal leading-4 text-gray-500 space-x-1">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
 */