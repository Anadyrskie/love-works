import Link from "next/link";

export default function Update() {
    return (
        <div className={`lg:mx-auto m-10 prose prose-lg dark:prose-invert prose-slate`}>
            <h1 className={'text-center'}>Calling all vendors!</h1>

            <p>Thank you for your interest in having a booth for the Saturday portion of the three-day Ajo LoveWorks
                Desert Festival.</p>
            <p className={'font-bold'}>Food vendors requiring Pima County Health Dept License, contact Carol Spencer <a className={'whitespace-nowrap'} href={'tel:+14127800054'}>(412) 780-0054</a> to
                apply.</p>
            <p className={'mt-0'}>AUA is processing all non-food/cottage-food vendor applications for the event.</p>

            <p>Application with fee attached may be delivered:</p>
                <ul className={'list-decimal marker:text-gray-700 dark:marker:text-gray-200'}>
                    <li>
                       <p>
                           by hand at the Art Under the Arches Gallery
                           (<span className={'font-bold'}>Tues - Sat 9a-4p</span>)
                       </p>
                    </li>
                    <li>
                        <p>by hand at the Ajo Artisans Mercado booth (in front of the Gallery <span className={'font-bold'}>9am - 1pm, Saturdays</span>)</p>
                    </li>
                    <li>
                        <p><span className={'font-bold'}>by mail</span> to Art Under the Arches, PO Box 163, Ajo, AZ 85321</p>
                    </li>
                </ul>

            <div className='flex flex-col items-center'>
                <Link href={`/loveworks_vendor_app.pdf`}>
                    <button name='Application' className="text-shadow-sm bg-blue-500 dark:bg-gray-700 text-white shadow-gray-600 drop-shadow-lg dark:outline-1 dark:outline-gray-200 hover:bg-blue-400 dark:hover:bg-gray-600 rounded-lg px-4 py-2 mb-4">PDF Application</button>
                </Link>
            </div>
        </div>
        )
}