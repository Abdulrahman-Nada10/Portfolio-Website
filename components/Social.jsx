import Link  from "next/link"
import { FaLinkedinIn , FaFacebook , FaInstagram} from "react-icons/fa";
const Social = () => {
    const socials = [
        {icon : <FaFacebook/> , path: "https://www.facebook.com/share/14E5nGsK3ab/" },
        {icon : <FaLinkedinIn/> , path: "https://www.linkedin.com/in/abdulrahman-nada-52487a32b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        {icon : <FaInstagram/> , path: "https://www.instagram.com/lo_ki65?igsh=M2Fha3cyN2tuMjNi" }
    ]
  return (
    <div className="flex gap-6 text-right">
      {socials.map((item , index) => {
        return (
          <Link key={index} href={item.path} className="w-9 h-9 border border-[#16323e] rounded-full flex justify-center items-center text-[#508399] text-base hover:bg-white hover:text-black hover:transition-all duration-500">
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social
