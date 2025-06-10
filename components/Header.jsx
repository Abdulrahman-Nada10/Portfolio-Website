import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white bg-pink-50/20 '>
      <div className="container mx-auto">
        <Link href="/">
          <h1 className='text-4xl font-semibold'>
            loki <span className='text-emerald-500'>.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex">
          <Nav/>
        </div>
       
      </div>
    </header>
  )
}

export default Header
