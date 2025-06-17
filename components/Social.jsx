import Link  from "next/link"
import { FaGithub , FaLinkedinIn , FaTiktok , FaFacebook , FaInstagram} from "react-icons/fa";
const Social = () => {
    const socials = [
        {icon : <FaLinkedinIn/> , path: "https://www.linkedin.com/in/abdulrahman-nada-52487a32b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        {icon : <FaGithub/> , path: "https://github.com/Abdulrahman-Nada10" },
        {icon : <FaFacebook/> , path: "https://www.facebook.com/share/14E5nGsK3ab/" },
        {icon : <FaInstagram/> , path: "https://www.instagram.com/lo_ki65?igsh=M2Fha3cyN2tuMjNi" },
        {icon : <FaTiktok/> , path: "https://www.tiktok.com/@arabian_systems1?is_from_webapp=1&sender_device=pc" }
    ]
  return (
    <div className="flex gap-6">
      {socials.map((item , index) => {
        return (
          <Link key={index} href={item.path} className="w-9 h-9 border border-emerald-500 rounded-full flex justify-center items-center text-emerald-500 text-base hover:bg-emerald-500 hover:text-black hover:transition-all duration-500">
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social
