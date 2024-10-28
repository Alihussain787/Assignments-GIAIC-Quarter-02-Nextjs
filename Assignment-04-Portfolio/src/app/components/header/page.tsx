import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { CiMobile2 } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

const header = () => {
    return(
        <header className="w-full relative w-full">
            <nav className="mt-4 bg-white/60 text-white w-full font-bold">
                <div className="w-full text-black py-4 flex items-center justify-between px-10"><span className="flex items-center gap-2"><CiMobile2 />03122963060</span> <span className="flex items-center gap-2"><TfiEmail /><Link href="#">alihussainsindhi787@gmail.com</Link></span></div>
                <div className="w-full bg-black p-6 flex items-center justify-center">
                    <div className="w-full max-w-screen-xl flex items-center justify-between">
                        <div className="text-2xl"><Link href="/">Portfolio</Link></div>
                            <ul className="flex gap-4">
                                <li className="px-3 relative before:content-[''] before:w-2 before:h-2 hover:before:bg-white before:rounded before:absolute before:left-0 before:top-[7px] before:ease-in-out before:duration-300"><Link href="/">Home</Link></li>
                                <li className="px-3 relative before:content-[''] before:w-2 before:h-2 hover:before:bg-white before:rounded before:absolute before:left-0 before:top-[7px] before:ease-in-out before:duration-300"><Link href="/about">About</Link></li>
                                <li className="px-3 relative before:content-[''] before:w-2 before:h-2 hover:before:bg-white before:rounded before:absolute before:left-0 before:top-[7px] before:ease-in-out before:duration-300"><Link href="/services">Services</Link></li>
                                <li className="px-3 relative before:content-[''] before:w-2 before:h-2 hover:before:bg-white before:rounded before:absolute before:left-0 before:top-[7px] before:ease-in-out before:duration-300"><Link href="/portfolio">Portfolio</Link></li>
                                <li className="px-3 relative before:content-[''] before:w-2 before:h-2 hover:before:bg-white before:rounded before:absolute before:left-0 before:top-[7px] before:ease-in-out before:duration-300"><Link href="/contact">Contact</Link></li>
                            </ul>
                        <div className="text-3xl hover: cursor-pointer"><FaSearch /></div>
                    </div>
                </div>    
                <div className="w-full py-2 flex items-center justify-center gap-10">
                    <ul className="flex gap-4 text-1xl">
                        <li className="ease-in-out- duration-300 border border-black p-2 text-black hover:border-white hover:text-white"><a href="#"><FaFacebookF /></a></li>
                        <li className="ease-in-out- duration-300 border border-black p-2 text-black hover:border-white hover:text-white"><a href="#"><FaYoutube /></a></li>
                        <li className="ease-in-out- duration-300 border border-black p-2 text-black hover:border-white hover:text-white"><a href="#"><FaInstagram /></a></li>
                        <li className="ease-in-out- duration-300 border border-black p-2 text-black hover:border-white hover:text-white"><a href="#"><FaXTwitter /></a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default header;