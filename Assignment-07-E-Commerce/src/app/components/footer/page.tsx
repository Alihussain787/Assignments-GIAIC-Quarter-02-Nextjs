import React from "react";
import { FaFacebook } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
const footer = () => {
    return(
        <div>
            <footer className="w-full bg-[#23A6F0] flex items-center justify-center max-md:w-full ">
                <div className="w-full px-[38px] flex flex-col max-md:w-full max-md:justify-start ">
                    <div className="w-full flex items-center justify-center py-4 max-md:w-full max-md:flex-col ">
                        <div className="w-full flex justify-between items-center max-md:flex-col">
                            <h1 className="w-full text-[24px] text-white font-bold max-md:px-10">My Products Store</h1>
                            <div className="w-full flex items-center justify-center py-4 max-md:w-full max-md:justify-center">
                                <p className="text-white text-[14px] max-md:text-center">Made By Ali Hussain All Right Reserved </p>
                            </div>
                            <ul className="flex gap-[12px] text-white text-xl">
                            <li className="cursor-pointer">
                                <FaFacebook className="hover:text-[#252B42] duration-200"/>
                            </li>
                            <li className="cursor-pointer">
                                <FaInstagramSquare className="hover:text-[#252B42] duration-200"/>
                            </li>
                            <li className="cursor-pointer">
                                <FaTwitterSquare className="hover:text-[#252B42] duration-200"/>
                            </li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default footer;