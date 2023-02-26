import Link from "next/link";

export default function Contact() {
    return (
        <div className="flex items-center justify-center mb-10">

        <div id='contact' className={'dark:text-white mx-auto text-center px-10 pb-100'}>
            <h1 className={'text-3xl font-semibold mb-2'}>Contact</h1>
            <LinkRow href={'mailto:info@loveworksajo.com'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={'dark:fill-orange-300 '} width="24" height="24" viewBox="0 0 24 24">
                        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                    </svg>
                    <p>info@loveworksajo.com</p>
            </LinkRow>
            <LinkRow href={'https://www.facebook.com/LoveWorksNightAndDay'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24"  height="24" className={'fill-blue-600 dark:fill-blue-500'}  viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
                <p>Facebook</p>
            </LinkRow>
        </div>
        </div>
    )
}


function LinkRow(props) {
    return (
        <Link className='text-blue-500 dark:text-gray-200 drop-shadow-md dark:underline dark:underline-offset-2 flex gap-x-4 pb-1 dark:pb-2' target={'_blank'} rel={'noreferrer'} href={props.href}>
        {props.children}
    </Link>
    )
}