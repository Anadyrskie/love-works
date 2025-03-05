import Link from "next/link";

export default function Update() {
    return (
        <div className={`lg:mx-auto m-10 prose prose-lg dark:prose-invert prose-slate`}>
            <h1 className={'text-center'}>Calling all vendors!</h1>

            <p>Thank you for your interest in having a booth for the Saturday portion of the three-day Ajo LoveWorks
                Desert Festival.</p>
            <h4 className='font-bold'>Food Vendor applications due by Feb 14.<br />All other Vendor applications due by Feb 28.</h4>
            <p></p>
            <div className='flex flex-col items-center'>
                <Link target={'_blank'} href={`https://forms.gle/3m98kokHDU5mjy3D9`}>
                    <button name='Application'
                            className="text-shadow-sm bg-blue-500 dark:bg-gray-700 text-white shadow-gray-600 drop-shadow-lg dark:outline-1 dark:outline-gray-200 hover:bg-blue-400 dark:hover:bg-gray-600 rounded-lg px-4 py-2 mb-4">Online
                        Application
                    </button>
                </Link>
            </div>

            <h3>Paper applications/cash & check payments are available:</h3>
            <ul className={'list-decimal marker:text-gray-700 dark:marker:text-gray-200'}>
                <li>
                    <p>at the Art Under the Arches Gallery
                        (<span className={'font-bold'}>Tues - Sat 10a-4p</span>)
                    </p>
                </li>
                <li>
                    <p>at the Love Works Festival mercado booth (<span className={'font-bold'}>10am - 1pm, Saturdays</span>)
                    </p>
                </li>
            </ul>

            {/*<div className='flex flex-col items-center'>*/}
            {/*    <Link href={`/loveworks_vendor_app.pdf`}>*/}
            {/*        <button name='Application'*/}
            {/*                className="text-shadow-sm bg-blue-500 dark:bg-gray-700 text-white shadow-gray-600 drop-shadow-lg dark:outline-1 dark:outline-gray-200 hover:bg-blue-400 dark:hover:bg-gray-600 rounded-lg px-4 py-2 mb-4">PDF*/}
            {/*            Application*/}
            {/*        </button>*/}
            {/*    </Link>*/}
            {/*</div>*/}
        </div>
    )
}