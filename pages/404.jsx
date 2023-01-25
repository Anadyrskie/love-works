// pages/404.js
import {Navbar} from "../components/Navbar";

export default function Custom404() {
    return (
        <>
            <div className='dark:shadow-lg'>
                <Navbar />
            </div>
            <div className='text-center p-10'>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1 className='text-2xl'>Sorry, this page doesn't exist yet!</h1>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p>If you got here from a link, we're probably working on it.</p>
            </div>
        </>
    )
}