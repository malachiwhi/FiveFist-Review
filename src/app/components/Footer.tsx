import Link from 'next/link'; 
import Image from 'next/image'; 

const Footer = () => {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative pb-16">
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 lg:grid-cols-5">
          <div className="lg:col-span-2">

            <div className="max-w-md mt-4 text-black">
              5Fist Review is a Web Review website that
            </div>

            <div className="mt-5">
              <a
                href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
                target="_blank"
                rel="noopener"
                className="relative block w-44"
              >
              </a>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-black rounded-md hover:text-gray-700 focus:text-gray-700 focus:bg-gray-200 focus:outline-none"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-black rounded-md hover:text-gray-700 focus:text-gray-700 focus:bg-gray-200 focus:outline-none"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="my-10 text-sm text-center text-black">
            Copyright © {new Date().getFullYear()}  5FistReview.com, Inc. All rights reserved.
          </div>
        </div>
    </div>    
  );
}

export default Footer;
