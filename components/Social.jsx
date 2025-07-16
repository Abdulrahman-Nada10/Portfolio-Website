import Link  from "next/link"
import { FaLinkedinIn , FaFacebook , FaInstagram} from "react-icons/fa";
const Social = () => {
    const socials = [
        {icon : <FaFacebook/> , path: "https://www.facebook.com/profile.php?id=61563884250861" },
        {icon : <FaLinkedinIn/> , path: "https://www.linkedin.com/company/105264662/admin/page-posts/published/?shareMsgArgs=null" },
        {icon : <FaInstagram/> , path: "https://www.instagram.com/arabiansystemsacademy/?__pwa=1" }
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
