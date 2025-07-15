"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaLinkedinIn, FaFacebook, FaInstagram, FaCcVisa, FaWhatsapp } from "react-icons/fa";
import { AiOutlineBank } from "react-icons/ai";
import { SiWesternunion, SiVodafone } from "react-icons/si";

const Links = [
  { name: 'Services', path: '/services' },
  { name: 'Student', path: '/resume' },
  { name: 'Team Work', path: '/work' },
  { name: 'Join Us', path: '/contact' }
];

const Footer = () => {
  const pathname = usePathname();

  const socials = [
    { icon: <FaFacebook />, path: "https://www.facebook.com/share/14E5nGsK3ab/" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/abdulrahman-nada-52487a32b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/lo_ki65?igsh=M2Fha3cyN2tuMjNi" }
  ];

  return (
    <footer className='bg-[#16323e] flex justify-center py-8 px-4'>
      <div className='w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-center md:items-start gap-12'>

        {/* Social Icons */}
        <div className="flex gap-4 md:flex-col items-center md:items-end">
          {socials.map((item, index) => (
            <Link key={index} href={item.path} className="w-9 h-9 border border-emerald-500 rounded-full flex justify-center items-center text-white hover:bg-white hover:text-[#78d0d3] transition-all duration-500">
              {item.icon}
            </Link>
          ))}
        </div>

        {/* Links */}
        <nav className='flex flex-col items-center md:items-end text-white gap-3'>
          {Links.map((link, index) => (
            <Link href={link.path} key={index} className={`${link.path === pathname && "border-b-2 border-blue-950"} capitalize font-medium hover:text-[#78d0d3] transition-all`}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Payment Methods */}
        <div className='flex flex-col gap-2 items-center md:items-end text-white'>
          <h2 className="font-bold">وسائل الدفع</h2>
          <div className="flex gap-4 md:gap-2 justify-center md:flex-col md:items-end">
            <AiOutlineBank className='text-3xl hover:text-[#78d0d3]' />
            <FaCcVisa className='text-3xl hover:text-[#78d0d3]' />
            <SiWesternunion className='text-3xl hover:text-[#78d0d3]' />
            <SiVodafone className='text-3xl hover:text-[#78d0d3]' />
          </div>
        </div>

        {/* WhatsApp & Hotline */}
        <div className='flex flex-col gap-3 items-center md:items-end text-white'>
          <h2 className="font-bold">واتساب</h2>
          <FaWhatsapp className='text-3xl hover:text-[#78d0d3]' />
          <h2 className='hover:text-[#78d0d3]'>الخط الساخن</h2>
          <p className='hover:text-[#78d0d3]'>01155135780</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer;
