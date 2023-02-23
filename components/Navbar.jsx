import Link from "next/link";
// import { useUser } from "../context/user";
import {useState} from "react";

export const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const links = [
        {name: 'Home', href: '/'},
        {name: 'Events', href: '/#events'},
        // {name: 'Maps', href: '/maps'},
        {name: 'Contact', href: '/#contact'},
        {name: 'Vendors', href: '/vendors'},
    ]


    return (
        <nav className="sticky top-0 z-50 w-full bg-gray-100 shadow dark:bg-gray-800 dark:shadow-xl">
            <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:block md:py-4">
                        <Link className="" href="/">
                            <h2 className="text-2xl font-bold dark:text-white">Love Works!</h2>
                        </Link>

                        <div className="md:hidden">
                            <button name='expand navbar'
                                className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 dark:text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 dark:text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? 'block' : 'hidden'
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:space-x-6 md:space-y-0 md:flex">
                            {links.map((link) => (
                                <li key={link.name} className="hover:text-gray-500 dark:text-white">
                                    <Link href={link.href}>
                                        {link.name}
                                    </Link>
                                </li>))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

// export default Navbar;