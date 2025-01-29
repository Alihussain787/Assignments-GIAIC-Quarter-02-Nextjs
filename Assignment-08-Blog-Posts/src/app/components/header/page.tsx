import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";

const Header = () => {
    return(
        <div>
        <header className="w-full flex flex-col gap-[16px] max-md:w-full max-md:max-w-3xl max-md:gap-0">
            <div className="w-full bg-[#252B42] flex items-center py-[12px] px-6 max-md:py-[24px]">
                <nav className="w-full flex justify-between gap-28 max-md:w-full max-md:max-w-3xl">
                    <div className="text-[24px] cursor-pointer">
                        <Link href="/"><h3 className="text-white font-bold max-md:font-bold max-md:text-[24px]">My Blog</h3></Link>
                    </div>
                    <div className="flex items-center justify-center md:hidden">
                        <FaBars className="text-3xl text-white hover:cursor-pointer"/>
                    </div>
                    <div className="flex justify-center items-center gap-[32px] max-md:w-full max-md:absolute max-md:top-20 max-md:left-0 max-md:hidden max-md:flex-col">
                        <Link href="/" className="text-white font-bold text-[14px] py-[5px] px-2 rounded cursor-pointer hover:bg-white hover:text-[#252B42] duration-200">Home</Link>
                        <Link href="/components/posts/" className="text-white font-bold text-[14px] py-[5px] px-2 rounded cursor-pointer hover:bg-white hover:text-[#252B42] duration-200">Blog</Link>
                        <Link href="/components/about/" className="text-white font-bold text-[14px] py-[5px] px-2 rounded cursor-pointer hover:bg-white hover:text-[#252B42] duration-200">About</Link>
                        <Link href="/components/contact/" className="text-white font-bold text-[14px] py-[5px] px-2 rounded cursor-pointer hover:bg-white hover:text-[#252B42] duration-200">Contact</Link>
                    </div>
                </nav>
            </div>
        </header>
        </div>
    )
}
export default Header;