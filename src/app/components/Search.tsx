import React from 'react'
import Image from "next/image";
import Link from 'next/link'; 

const Search = () => {
    return (
    <div className="py-16 bg-white">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-3xl font-bold text-center text-black mb-10">
                    Search by Categories
                </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <Link href="/category/tech" className="bg-gray-100 rounded-lg p-8 flex flex-col items-center text-center">
                    <Image src="/tech-icon.svg" width={64} height={64} alt="Tech" />
                    <h3 className="mt-4 text-lg font-semibold text-black">Technology</h3>
                    <p className="mt-2 text-gray-600">Gadgets, electronics, and more</p>
                </Link>
                <Link href="/category/home" className="bg-gray-100 rounded-lg p-8 flex flex-col items-center text-center">
                    <Image src="/home-icon.svg" width={64} height={64} alt="Home" />
                    <h3 className="mt-4 text-lg font-semibold text-black">Home & Garden</h3>
                    <p className="mt-2 text-gray-600">Appliances, furniture, tools</p>
                </Link>
                <Link href="/category/beauty" className="bg-gray-100 rounded-lg p-8 flex flex-col items-center text-center">
                    <Image src="/beauty-icon.svg" width={64} height={64} alt="Beauty" />
                    <h3 className="mt-4 text-lg font-semibold text-black">Beauty & Health</h3>
                    <p className="mt-2 text-gray-600">Cosmetics, supplements, and more</p>
                </Link>
                    <Link href="/category/sports" className="bg-gray-100 rounded-lg p-8 flex flex-col items-center text-center">
                    <Image src="/sports-icon.svg" width={64} height={64} alt="Sports" />
                    <h3 className="mt-4 text-lg font-semibold text-black">Sports & Outdoors</h3>
                    <p className="mt-2 text-gray-600">Gear, equipment, and accessories</p>
                </Link>
            </div>
            </div>
        </div>
    )

}

export default Search;
