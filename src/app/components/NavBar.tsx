import Image from "next/image";
import Link from "next/link";


/* width={100} height={29} */


export default function NavBar() {
    return (
        <div>
             <nav className="flex justify-between items-center max-w-container px-8 py-5 relative z-30">
                <Link href='/'>
                    <Image alt="5Review" src="/5ReviewBlack.svg" 
                         width={100} height={29}/> 
                </Link>
                <ul className='hidden lg:flex h-full gap-12 text-black regular-16 items-center cursor-pointer transition-all'>
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
                    <li className='hover:font-bold'>
                        <Link href='/compare'>
                            Compare
                        </Link>
                    </li>
                        <Link href='/login'>
                            Login
                        </Link>
                </ul>
            </nav>
        </div>
    );
}
