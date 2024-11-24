import React from "react";
import Image from "next/image";

const footer = () => {
    return(
        <div>
            <footer className="w-[1280px] bg-white flex items-center justify-center p-[80px] my-[80px] max-md:w-full max-md:max-w-3xl">
                <div className="w-[1120px] flex flex-col gap-[80px] max-md:w-full max-md:max-w-3xl ">
                    <div className="flex items center justify-between max-md:w-full max-md:max-w-3xl max-md:block">
                        <div>
                            <h3 className="font-semibold max-md:text-center max-md:my-2">Subscribe to our newsletter</h3>
                            <p className="max-md:text-center max-md:my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="flex flex-col gap-[16px] max-md:my-2">
                            <div className="flex gap-[16px] max-md:flex-col">
                                <input type="text" placeholder="Enter your email" className="w-[265px] p-[12px] border border-black outline-0 max-md:w-full max-md:max-w-3xl"/>
                                <button className="p-[12px] border border-black outline-0">Subscribe</button>
                            </div>
                            <p className="text-[12px] max-md:text-center">By subscribing you agree to with our <a href="#" className="underline">Privacy Policy</a></p>
                        </div>
                    </div>
                    <div className="flex gap-[40px] max-md:flex-col">
                        <div className="w-[250px] flex text-[25px] cursor-pointer max-md:w-full max-md:max-w-3xl max-md:justify-center">
                            <Image className="h-[30px]"src={"/images/logo.svg"} 
                            alt={"icon"} 
                            width={"32"} 
                            height={"30"} />
                            <h3 className="font-bold">Ddsgnr</h3>
                        </div>
                        <div className="w-[250px] flex flex-col gap-[16px] max-md:w-full max-md:max-w-3xl">
                            <h3 className="text-[16px] font-semibold max-md:text-center">Courses</h3>
                            <ul className="max-md:text-center">
                                <li className="py-[8px]">Business</li>
                                <li className="py-[8px]">Development</li>
                                <li className="py-[8px]">Technology</li>
                                <li className="py-[8px]">Design</li>
                                <li className="py-[8px]">Programming</li>
                            </ul>
                        </div>
                        <div className="w-[250px] flex flex-col gap-[16px] max-md:w-full max-md:max-w-3xl">
                            <h3 className="text-[16px] font-semibold max-md:text-center">Resources</h3>
                            <ul className="max-md:text-center">
                                <li className="py-[8px]">Career</li>
                                <li className="py-[8px]">Resume</li>
                                <li className="py-[8px]">Learning</li>
                                <li className="py-[8px]">Interview Preparation</li>
                                <li className="py-[8px]">Jobs</li>
                            </ul>
                        </div>
                        <div className="w-[250px] flex flex-col gap-[16px] max-md:w-full max-md:max-w-3xl">
                            <h3 className="text-[16px] font-semibold max-md:text-center">About Us</h3>
                            <ul className="max-md:text-center">
                                <li className="py-[8px]">Contact</li>
                                <li className="py-[8px]">Help/Support</li>
                                <li className="py-[8px]">FAQ</li>
                                <li className="py-[8px]">Terms and Conditions</li>
                                <li className="py-[8px]">Partners</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-black pt-[20px] flex justify-between max-md:flex-col">
                        <div className="flex gap-[24px] max-md:flex-col max-md:mt-20">
                            <p className="max-md:text-center">2023 Ddsgnr. All right reserved.</p>
                            <ul className="flex gap-[24px] max-md:justify-center">
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Terms of Service</a></li>
                                <li><a href="">Cookies Settings</a></li>
                            </ul>
                        </div>
                        <div className="max-md:mt-8">
                            <ul className="flex gap-[12px] max-md:justify-center">
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
            </footer>
        </div>
    )
}
export default footer;