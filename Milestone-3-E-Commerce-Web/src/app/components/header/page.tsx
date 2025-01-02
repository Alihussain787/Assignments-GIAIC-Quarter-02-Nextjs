import React from "react";
import Link from "next/link";

const Header = () => {
    return(
        <div>
        <header className="w-full flex flex-col gap-[16px] max-md:w-full max-md:max-w-3xl max-md:gap-0">
            <div className="w-full bg-[#252B42] flex items-center py-[12px] px-20 max-md:bg-[#252B42] max-md:py-[24px]">
                <nav className="w-full flex justify-between gap-28 max-md:w-full max-md:max-w-3xl">
                    <div className="text-[24px] cursor-pointer">
                        <Link href="/"><h3 className="text-white font-bold max-md:font-bold max-md:text-[24px]">WebStore</h3></Link>
                    </div>
                    <div className="w-full rounded bg-white flex justify-center items-center gap-[32px] max-md:w-full max-md:absolute max-md:top-20 max-md:left-0 max-md:hidden">
                        <div className="flex items-center gap-2 max-md:flex-col">
                            <Link href="/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer hover:text-[#23A6F0] duration-200">Home</Link>
                            <Link href="/components/products/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer hover:text-[#23A6F0] duration-200">Products</Link>
                            <Link href="/components/about/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer hover:text-[#23A6F0] duration-200">About</Link>
                            <Link href="/components/contact/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer hover:text-[#23A6F0] duration-200">Contact</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        </div>
    )
}
export default Header;