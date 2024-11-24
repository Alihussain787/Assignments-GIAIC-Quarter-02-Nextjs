import React from "react";
import Image from "next/image";

const header = () => {
    return(
        <div>
            <header className="w-[1280px] flex flex-col gap-[16px] max-md:w-full max-md:max-w-3xl max-md:gap-0">
                <div className="w-full bg-[#F7F7F7] flex items-center justify-center border-b border-black">
                <div className="w-[1154px] flex justify-between py-[12px] max-md:hidden">
                    <div className="flex gap-[16px]">
                        <p>Phone Number: 956 742 455 678</p>
                        <p className="border-l border-black border-left"></p>
                        <p>Email:info@ddsgnr.com</p>
                    </div>
                    <div>
                        <ul className="flex gap-[12px]">
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/f-icon.svg"} 
                                alt={"icon"} 
                                width={"10"} 
                                height={"18"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/i-icon.svg"} 
                                alt={"icon"} 
                                width={"18"} 
                                height={"18"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/t-icon.svg"} 
                                alt={"icon"} 
                                width={"18"} 
                                height={"18"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/l-icon.svg"} 
                                alt={"icon"} 
                                width={"18"} 
                                height={"18"}/>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                </div>
                <div className="w-full bg-[#F7F7F7] flex items-center justify-center py-[12px] border-b border-black max-md:bg-white max-md:py-[24px]">
                <nav className="w-[1154px] flex justify-between items-center max-md:w-full max-md:max-w-3xl max-md:px-6">
                    <div className="flex items-center text-[25px] cursor-pointer">
                        <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/logo.svg"} 
                            alt={"icon"} 
                            width={"32"} 
                            height={"30"}/>
                        <h3 className="font-bold max-md:font-bold max-md:text-[25px]">Ddsgnr</h3>
                    </div>
                    <div className="bg-white flex gap-[32px] max-md:hidden">
                        <ul className="flex items-center gap-[32px]">
                            <li className="p-[10px] cursor-pointer">Home</li>
                            <li className="p-[10px] cursor-pointer">Courses</li>
                            <li className="p-[10px] cursor-pointer">Services</li>
                            <li className="p-[10px] cursor-pointer">Achievement</li>
                            <li className="p-[10px] cursor-pointer">About Us</li>
                            <li className="p-[10px] cursor-pointer">Testimonial</li>
                        </ul>
                        <div className="flex gap-[16px]">
                            <button className="px-[20px] py-[8px] border border-black rounded-[5px]">Login</button>
                            <button className="px-[20px] py-[8px] bg-black text-white rounded-[5px]">Sign Up</button>
                        </div>
                    </div>
                    <div className="flex items-center hidden max-md:block hover:cursor-pointer">
                        <Image src={"/images/bar.svg"} 
                            alt={"icon"} 
                            width={"24"} 
                            height={"24"}/>
                    </div>
                </nav>
                </div>
            </header>
        </div>
    )
}
export default header;