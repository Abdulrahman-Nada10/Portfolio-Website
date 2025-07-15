"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const Links =[
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Services',
    path: '/services',
  },
  // {
  //   name: 'Student',
  //   path: '/Student',
  // },
  // {
  //   name: 'Team Work',
  //   path: '/work',
  // },
  {
    name: 'Join us',
    path: '/contact',
  }
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className='flex gap-8'>
      {Links.map((link )=>{
        return (
          <Link href={link.path} key={link.name} className={`${link.path === pathname && "hover:text-[#78d0d3] border-b-2 border-[#78d0d3]"} 
          capitalize   font-medium hover:text-[#78d0d3] transition-all`}>
            {link.name}
          </Link>
        )
      })}    
    </nav>
  )
}

export default Nav
