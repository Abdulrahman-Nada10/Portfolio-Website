"use client"
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci";
const Links =[
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    // {
    //     name: "resume",
    //     path: "/resume"
    // },
    // {
    //     name: "work",
    //     path: "/work"
    // },
    {
        name: "contact",
        path: "/contact"
    }
]
const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className=" text-[32px] text-emerald-500"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className='mt-32 mb-40 text-center text-2xl flex justify-center'>
                <Link href="/">
                    <img src="/assets/servis/logo.jpg" alt="" className='w-[200px]'/>
                </Link>
            </div>
            <nav className='flex flex-col justify-center items-center gap-8 text-white'>
              {Links.map((links , index) => {
                return (
                    <Link href={links.path} key={index} className={`${links.path === pathname && `border-b-2 text-white border-[#78d0d3] text-xl capitalize hover:text-[#78d0d3] transition-all`} text-xl capitalize hover:text-[#78d0d3] transition-all`}>
                        {links.name}
                    </Link>
                )
              })}  
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
