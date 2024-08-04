import React from 'react'
import Image from "next/image";
import Link from 'next/link'; 

const Hero = () => {
  return (
    <>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-5xl font-bold leading-tight text-black">
              Discover the Best Products with Real Reviews
            </h1>
            <p className="py-6 text-xl leading-relaxed text-gray-600">
              Unbiased, honest reviews from real users. Find the right product for you based on ratings, reviews, and expert opinions.
            </p>
            <Link href="/search" className="px-8 py-4 text-lg font-medium text-center text-white bg-black rounded-md">
              Start Exploring
            </Link>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <Image
              src="/5ReviewBlack.svg"
              width={616}
              height={617}
              className="object-cover"
              alt="5Review Logo"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
