'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className="flex justify-between items-center max-w-container px-8 py-5 relative z-30">
                <Link href='/'>
                    <Image alt="5Review" src="/5ReviewBlack.svg" width={100} height={29} />
                </Link>
                <div className="hidden lg:flex items-center">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            style={{ width: '250px' }}
                            
                        />
                    </div>
                {/* Hamburger Icon for Mobile */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
                {/* Desktop Menu */}
                <ul className={`hidden lg:flex h-full gap-12 text-black regular-16 items-center cursor-pointer transition-all`}>
                    <li className='hover:font-bold'>
                        <Link href='/'>
                            Home
                        </Link>
                    </li>
                    <li className='hover:font-bold'>
                        <Link href='/search'>
                            Search
                        </Link>
                    </li>
                    <li className='hover:font-bold'>
                        <Link href='/review'>
                            Review
                        </Link>
                    </li>
                    <li className='hover:font-bold'>
                        <Link href='/blog'>
                            Blog
                        </Link>
                    </li>
                    <li className=''>
                        <Link href='/login'>
                            <button className="px-6 py-2 text-white bg-black rounded-md transition-transform transform hover:scale-105">
                                Login
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href='/signup'>
                            <button className="px-6 py-2 text-white bg-black rounded-md transition-transform transform hover:scale-105">
                                Sign Up
                            </button>
                        </Link>
                    </li>
                </ul>
                {/* Mobile Menu */}
                <ul className={`lg:hidden absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 py-6 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
                    <li className='hover:font-bold'>
                        <Link href='/'>
                            Home
                        </Link>
                    </li>
                    <li className='hover:font-bold'>
                        <Link href='/search'>
                            Search
                        </Link>
                    </li>
                    <li className='hover:font-bold'>
                        <Link href='/review'>
                            Review
                        </Link>
                    </li>
                    <li className='hover:font-bold'>
                        <Link href='/blog'>
                            Blog
                        </Link>
                    </li>
                    <li className=''>
                        <Link href='/compare'>
                            Compare
                        </Link>
                    </li>
                    <li>
                        <Link href='/login'>
                            <button className="px-6 py-2 text-white bg-black rounded-md transition-transform transform hover:scale-105">
                                Login
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href='/signup'>
                            <button className="px-6 py-2 text-white bg-black rounded-md transition-transform transform hover:scale-105">
                                Sign Up
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
