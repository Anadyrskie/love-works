import Link from "next/link";

export default function Donate() {
    return (
        <div className={`lg:mx-auto m-10 prose prose-lg dark:prose-invert prose-slate`}>
            <h2 className={'text-center'}>Donate</h2>
            <p className=''>Donate to support LoveWorks Ajo in their mission of celebrating the diverse cultures of the Sonoran Desert.
                Your donation helps make events such as the LoveWorks festival possible.
                <br />
                LoveWorks Ajo is a volunteer-run 501(c)3 non-profit charitable organization.</p>
            <p>Donations can be made online by using the button below, or by cash, check, or money order, payable to
                LoveWorks Ajo. Please mail your donation to: </p>
                <span className='block ml-10 mt-[-20px] font-bold'>LoveWorks Ajo <br/>
                410 W Vananda Ave, Ajo AZ 85321
                </span>

            <div className='flex flex-col items-center mt-[-10px]'>
                <h3>
                    Donate Online!
                </h3>
                <div className='flex-row space-x-3'>
                    <Link target={'_blank'} href={`https://square.link/u/gJobZnsq`}>
                        <button name='Donate'
                                className="text-shadow-sm bg-blue-500 dark:bg-gray-700 text-white shadow-gray-600 drop-shadow-lg dark:outline-1 dark:outline-gray-200 hover:bg-blue-400 dark:hover:bg-gray-600 rounded-lg px-4 py-2 mb-4">Credit
                            Card
                        </button>
                    </Link>
                    <Link target={'_blank'} href={`https://account.venmo.com/u/Loveworksajo`}>
                        <button name='Donate'
                                className="text-shadow-sm bg-blue-500 dark:bg-gray-700 text-white shadow-gray-600 drop-shadow-lg dark:outline-1 dark:outline-gray-200 hover:bg-blue-400 dark:hover:bg-gray-600 rounded-lg px-4 py-2 mb-4">Venmo
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    )
}