import Image from "next/image";
import React from "react";
import Link from 'next/link'

export const Blog = () => {
  return (
    <div className="py-16 bg-white">
    <div className="container mx-auto px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-black mb-10">
        Latest Blog Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-black mb-2">How to Choose the Right Product</h3>
          <p className="text-gray-600">Choosing the right product can be overwhelming. Here's how to make the best choice...</p>
          <Link href="/blog/choosing-product" className="text-indigo-600 hover:underline mt-4 block">Read more</Link>
        </div>
        <div className="bg-gray-100 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-black mb-2">Top 10 Gadgets of 2024</h3>
          <p className="text-gray-600">Explore the top gadgets of 2024 that are making waves in the tech world...</p>
          <Link href="/blog/top-gadgets-2024" className="text-indigo-600 hover:underline mt-4 block">Read more</Link>
        </div>
        <div className="bg-gray-100 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-black mb-2">Healthy Living Tips</h3>
          <p className="text-gray-600">Discover essential tips to maintain a healthy lifestyle in today's fast-paced world...</p>
          <Link href="/blog/healthy-living" className="text-indigo-600 hover:underline mt-4 block">Read more</Link>
        </div>
      </div>
    </div>
  </div>
  );
};



export default Blog;