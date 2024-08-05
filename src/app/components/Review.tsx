import React from 'react';
import Link from 'next/link';

const Review = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-black mb-10">
          Recent Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-black mb-2">Product A</h3>
            <p className="text-gray-600">This product exceeded my expectations...</p>
            <Link href="/review/product-a" className="text-indigo-600 hover:underline mt-4 block">Read more</Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-black mb-2">Product B</h3>
            <p className="text-gray-600">A solid choice for anyone looking for...</p>
            <Link href="/review/product-b" className="text-indigo-600 hover:underline mt-4 block">Read more</Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-black mb-2">Product C</h3>
            <p className="text-gray-600">I&apos;ve been using this for a month now and...</p>
            <Link href="/review/product-c" className="text-indigo-600 hover:underline mt-4 block">Read more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
