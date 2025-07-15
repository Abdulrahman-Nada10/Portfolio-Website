"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaLinkedinIn , FaFacebook , FaInstagram} from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { AiOutlineBank } from "react-icons/ai";
import { SiWesternunion } from "react-icons/si";
import { SiVodafone } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
const Links =[
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'Student',
    path: '/resume',
  },
  {
    name: 'Team Work',
    path: '/work',
  },
  {
    name: 'Join Us',
    path: '/contact',
  }
];
const Footer = () => {
    const pathname = usePathname();
        const socials = [
            {icon : <FaFacebook/> , path: "https://www.facebook.com/share/14E5nGsK3ab/" },
            {icon : <FaLinkedinIn/> , path: "https://www.linkedin.com/in/abdulrahman-nada-52487a32b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
            {icon : <FaInstagram/> , path: "https://www.instagram.com/lo_ki65?igsh=M2Fha3cyN2tuMjNi" }
        ]
  return (
    <footer className=' bg-[#16323e] flex justify-center'>
      <div className='w-[70%] flex justify-between items-start flex-wrap gap-12 p-6'>
        <div>
            <div className="flex gap-6 flex-col text-right">
            {socials.map((item , index) => {
                return (
                    <Link key={index} href={item.path} className="w-9 h-9 border border-emerald-500 rounded-full flex justify-center items-center text-white text-base hover:bg-white hover:text-[#78d0d3] hover:transition-all duration-500">
                        {item.icon}
                    </Link>
                    )
                })}
            </div>
        </div>
        <nav className='flex flex-col text-white gap-8'>
            {Links.map((link , index)=>{
                return (
                <Link href={link.path} key={index} className={`${link.path === pathname && "text-white border-b-2 border-blue-950 hover:text-[#78d0d3]"} 
                Capitalize font-medium hover:text-[#78d0d3] transition-all`}>
                    {link.name}
                </Link>
                )
            })}    
        </nav>

        <div className='p-2 flex flex-col justify-center gap-2 text-right text-white'>
            <h2>وسائل الدفع</h2>
            <AiOutlineBank className='text-3xl hover:text-[#78d0d3]'/>
            <FaCcVisa className='text-3xl hover:text-[#78d0d3]'/>
            <SiWesternunion className='text-3xl hover:text-[#78d0d3]'/>
            <SiVodafone className='text-3xl hover:text-[#78d0d3]'/>
        </div>
        <div className='p-2 flex flex-col gap-6 justify-end text-right text-white'>
            <h2>وتساب</h2>
            <div className='w-full flex justify-end'>
                <FaWhatsapp className='text-3xl hover:text-[#78d0d3]'/>
            </div>
            <h2 className='hover:text-[#78d0d3]'>الخط الساخن</h2>
            <p className='hover:text-[#78d0d3]'>01155135780</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
