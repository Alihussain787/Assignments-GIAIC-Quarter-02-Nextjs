import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
const footer = () => {
    return(
        <div>
            <footer className="w-full bg-[#252B42] flex items-center justify-center max-md:w-full ">
                <div className="w-full py-[12px] px-20 flex flex-col max-md:w-full max-md:justify-start ">
                    <div className="w-full flex items-center justify-center py-4 max-md:w-full max-md:flex-col ">
                        <div className="w-full flex justify-between items-center max-md:flex-col">
                            <h1 className="text-[24px] text-white font-bold max-md:px-10">WebStore</h1>
                            <ul className="flex gap-[12px] text-white text-xl">
                            <li className="cursor-pointer">
                                <FaFacebook className="hover:text-[#23A6F0] duration-200"/>
                            </li>
                            <li className="cursor-pointer">
                                <FaInstagramSquare className="hover:text-[#23A6F0] duration-200"/>
                            </li>
                            <li className="cursor-pointer">
                                <FaTwitterSquare className="hover:text-[#23A6F0] duration-200"/>
                            </li>
                            
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white w-full rounded py-[12px] px-[38px] flex justify-center max-md:flex-col max-md:justify-center max-md:items-center">
                        <Link href="/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer hover:text-[#23A6F0]">Home</Link>
                        <Link href="/components/products/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer hover:text-[#23A6F0]">Products</Link>
                        <Link href="/about/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer hover:text-[#23A6F0]">About</Link>
                        <Link href="/contact/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer hover:text-[#23A6F0]">Contact</Link>
                    </div>
                    <div className="w-full flex items-center justify-start py-4 max-md:w-full max-md:justify-center">
                        <p className="text-white text-[14px] max-md:text-center">Made By Ali Hussain All Right Reserved </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default footer;