import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import { Button } from './ui/button'
import MobileNav from './MobileNav'
const Header = () => {
  return (
    <header className='py-4 text-white bg-[#16323e] px-6'>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className='flex gap-5'>
          <img src="/assets/servis/logo-3.jpg" alt="" className='w-12 lg:w-20'/>
          <img src="/assets/servis/logo.jpg" alt="" className='w-16 lg:w-32'/>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav/>
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  )
}

export default Header
