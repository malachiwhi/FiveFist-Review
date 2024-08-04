import React from 'react'
import Link from 'next/link'

const Action = () => {
  return (
    <div className="bg-black py-16">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Community of Reviewers
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join the email list today so you can review use
          </p>
          <Link href="/newletter" className="px-8 py-4 text-lg font-medium text-center text-black bg-white rounded-md">
            Sign Up Now
          </Link>
        </div>
      </div>
  )
}

export default Action
