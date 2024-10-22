import Link from "next/link";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import Image from "./Assets/header-img.png";
import Image2 from "./Assets/photo-1.png"
import Image3 from "./Assets/photo-2.png"
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { FaConnectdevelop } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { MdAppSettingsAlt } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import { TbDatabaseCog } from "react-icons/tb";
import { GiSpikyField } from "react-icons/gi";
import { IoGameControllerOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { PiHandshakeFill } from "react-icons/pi";


const mainPage = () => {
    return(
    <div className="bg-blue-950 w-full text-white">

        <Header  />

        <section className="w-full flex items-center justify-center py-12">
            <div></div>
            <div className="w-full max-w-screen-xl flex items-center justify-center py-5">
                <div className="w-3/4 flex items-center justify-center">
                    <img src={Image.src} alt="" className="w-full max-w-2xl"/>
                </div>
                <div className="pl-8">
                    <div className="flex py-6">
                        <ul className="flex gap-4 text-xl">
                            <li className="ease-in-out duration-300 pt-2 text-white hover:text-sky-400 hover:pt-0"><a href="#"><FaFacebookF /></a></li>
                            <li className="ease-in-out duration-300 pt-2 text-white hover:text-sky-400 hover:pt-0"><a href="#"><FaYoutube /></a></li>
                            <li className="ease-in-out duration-300 pt-2 text-white hover:text-sky-400 hover:pt-0"><a href="#"><FaInstagram /></a></li>
                            <li className="ease-in-out duration-300 pt-2  text-white hover:text-sky-400 hover:pt-0"><a href="#"><FaXTwitter /></a></li>
                        </ul>
                    </div>
                    <p className="relative text-sky-400 tracking-wider font-bold before:content-[''] before:w-2 before:h-2 before:bg-sky-400 before:rounded before:absolute before:top-1/3 after:content-[' '] after:w-2 after:h-2 after:bg-sky-400 after:rounded after:absolute after:top-1/3"><span className="pl-3 pr-1">DEGITAL MARKETING</span></p>
                    <h1 className="text-6xl font-bold py-6 leading-tight">Digital Markting For Your grwoing <span className="text-sky-400 relative after:conter-[''] after:w-full after:h-1 after:bg-sky-400 after:absolute after:left-0 after:bottom-0 hover:cursor-default">business</span></h1>
                    <p className="tracking-wider font-bold text-slate-300">Our expert team is dedicated to deliver exceptional solutions tailored to your need. Let's bring your to life and create somthing extraordinary together.</p>
                    <button type="submit" className="text-sky-400 my-8 border py-4 px-12 border-sky-400 border-2 rounded-tr-2xl rounded-bl-2xl tracking-wider font-bold ease-in-out duration-300 hover:bg-sky-400 hover:text-white">Start Now</button>
                </div>
            </div>
        </section>
        <section className="bg-slate-950 w-full flex items-center justify-center">
            <div className="w-full max-w-screen-xl py-16">
                <div className="w-full flex">
                    <div className="w-2/4">
                        <p className="relative text-sky-400 tracking-wider font-bold before:content-[''] before:w-2 before:h-2 before:bg-sky-400 before:rounded before:absolute before:top-1/3 after:content-[' '] after:w-2 after:h-2 after:bg-sky-400 after:rounded after:absolute after:top-1/3"><span className="pl-3 pr-1">SERVICES</span></p>
                        <h1 className="text-4xl py-2 tracking-wider font-bold">Services We Offer</h1>
                        <p className="tracking-wider text-slate-300">Our expert team is dedicated to deliver exceptional solutions tailored to your need. Let's bring your to life and create somthing extraordinary together.</p>
                    </div>
                    <div className="w-2/4 flex items-center justify-end">
                        <Link href="#" className="border bg-sky-400 text-white my-8 py-4 px-12 border-sky-400 border-2 rounded-tr-2xl rounded-bl-2xl tracking-wider font-bold ease-in-out duration-300 hover:bg-slate-950 hover:text-sky-400">See All Services</Link>
                    </div>
                </div>
                <div className="w-full grid grid-cols-3 gap-4 my-10">
                    <div className="border ease-in-out duration-300 group rounded border-blue-900 w-full p-6 hover:bg-sky-500 hover:text-white">
                        <span className="text-6xl text-sky-400 group-hover:text-white"><FaLaptopCode /></span>
                        <h1 className="text-2xl py-2 tracking-wider font-bold">Web Development</h1>
                        <p className="tracking-wider text-slate-300 mb-4">Our expert team is dedicated to deliver exceptional solutions tailored to your need. Let's bring your to life and create somthing extraordinary together.</p>
                        <Link href="#" className="tracking-wider text-sky-400 group-hover:text-white flex items-center">Read more <FaArrowRightLong/></Link>
                    </div>
                    <div className="border ease-in-out duration-300 group rounded border-blue-900 w-full p-6 hover:bg-sky-500 hover:text-white">
                        <span className="text-6xl text-sky-400 group-hover:text-white"><FaConnectdevelop /></span>
                        <h1 className="text-2xl py-2 tracking-wider font-bold">Digital Marketing</h1>
                        <p className="tracking-wider text-slate-300 mb-4">Our expert team is dedicated to deliver exceptional solutions tailored to your need. Let's bring your to life and create somthing extraordinary together.</p>
                        <Link href="#" className="tracking-wider text-sky-400 group-hover:text-white flex items-center">Read more <FaArrowRightLong /></Link>
                    </div>
                    <div className="border ease-in-out duration-300 group rounded border-blue-900 w-full p-6 hover:bg-sky-500 hover:text-white">
                        <span className="text-6xl text-sky-400 group-hover:text-white"><AiOutlineProduct /></span>
                        <h1 className="text-2xl py-2 tracking-wider font-bold">Products</h1>
                        <p className="tracking-wider text-slate-300 mb-4">Our expert team is dedicated to deliver exceptional solutions tailored to your need. Let's bring your to life and create somthing extraordinary together.</p>
                        <Link href="#" className="tracking-wider text-sky-400 group-hover:text-white flex items-center">Read more <FaArrowRightLong /></Link>
                    </div>
                    <div className="border ease-in-out duration-300 group rounded border-blue-900 w-full p-6 hover:bg-sky-500 hover:text-white">
                        <span className="text-6xl text-sky-400 group-hover:text-white"><MdAppSettingsAlt /></span>
                        <h1 className="text-2xl py-2 tracking-wider font-bold">App Development</h1>
                        <p className="tracking-wider text-slate-300 mb-4">Our expert team is dedicated to deliver exceptional solutions tailored to your need. Let's bring your to life and create somthing extraordinary together.</p>
                        <Link href="#" className="tracking-wider text-sky-400 group-hover:text-white flex items-center">Read more <FaArrowRightLong /></Link>
                    </div>
                    <div className="border ease-in-out duration-300 group rounded border-blue-900 w-full p-6 hover:bg-sky-500 hover:text-white">
                        <span className="text-6xl text-sky-400 group-hover:text-white"><TbSeo /></span>
                        <h1 className="text-2xl py-2 tracking-wider font-bold">SEO Service</h1>
                        <p className="tracking-wider text-slate-300 mb-4">Our expert team is dedicated to deliver exceptional solutions tailored to your need. Let's bring your to life and create somthing extraordinary together.</p>
                        <Link href="#" className="tracking-wider text-sky-400 group-hover:text-white flex items-center">Read more <FaArrowRightLong /></Link>
                    </div>
                    <div className="border ease-in-out duration-300 group rounded border-blue-900 w-full p-6 hover:bg-sky-500 hover:text-white">
                        <span className="text-6xl text-sky-400 group-hover:text-white"><TbDatabaseCog /></span>
                        <h1 className="text-2xl py-2 tracking-wider font-bold">Data Analysis</h1>
                        <p className="tracking-wider text-slate-300 mb-4">Our expert team is dedicated to deliver exceptional solutions tailored to your need. Let's bring your to life and create somthing extraordinary together.</p>
                        <Link href="#" className="tracking-wider text-sky-400 group-hover:text-white flex items-center">Read more <FaArrowRightLong /></Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-slate-950 w-full flex items-center justify-center">
            <div className="w-full max-w-screen-xl py-16">
                <div className="w-full flex">
                    <div className="w-2/4">
                        <p className="relative text-sky-400 tracking-wider font-bold before:content-[''] before:w-2 before:h-2 before:bg-sky-400 before:rounded before:absolute before:top-1/3 after:content-[' '] after:w-2 after:h-2 after:bg-sky-400 after:rounded after:absolute after:top-1/3"><span className="pl-3 pr-1">ABOUT US</span></p>
                        <h1 className="text-4xl py-2 tracking-wider font-bold">trusted by worldwide clients since <span className="text-sky-400 relative after:conter-[''] after:w-full after:h-1 after:bg-sky-400 after:absolute after:left-0 after:bottom-0 hover:cursor-default">1990.</span></h1>
                        <p className="tracking-wider text-slate-300">Our expert team is dedicated to deliver exceptional solutions tailored to your need. Let's bring your to life and create somthing extraordinary together.</p>
                        <div className="w-full grid grid-cols-2 gap-4 my-10">
                            <div className="w-full flex">
                                <div className="mt-2 pt-1 bg-blue-900 h-11 p-2 rounded">
                                    <span className="text-4xl text-sky-400 group-hover:text-white"><GiSpikyField /></span>
                                </div>
                                <div className="px-2">
                                <h1 className="text-1xl py-2 tracking-wider font-bold">First On Field</h1>
                                <p className="tracking-wider text-slate-300 mb-4">Our expert team is dedicated to deliver exceptional solutions tailored to your need.</p>
                                </div>      
                            </div>
                            <div className="w-full flex">
                                <div className="mt-2 pt-1 bg-blue-900 h-11 p-2 rounded">
                                    <span className="text-4xl text-sky-400 group-hover:text-white"><IoGameControllerOutline /></span>
                                </div>
                                <div className="px-2">
                                <h1 className="text-1xl py-2 tracking-wider font-bold">Easy To Reach</h1>
                                <p className="tracking-wider text-slate-300 mb-4">Our expert team is dedicated to deliver exceptional solutions tailored to your need.</p>
                                </div>      
                            </div>
                            <div className="w-full flex">
                                <div className="mt-2 pt-1 bg-blue-900 h-11 p-2 rounded">
                                    <span className="text-4xl text-sky-400 group-hover:text-white"><GrMapLocation /></span>
                                </div>
                                <div className="px-2">
                                <h1 className="text-1xl py-2 tracking-wider font-bold">World Wide Services</h1>
                                <p className="tracking-wider text-slate-300 mb-4">Our expert team is dedicated to deliver exceptional solutions tailored to your need.</p>
                                </div>      
                            </div>
                            <div className="w-full flex">
                                <div className="mt-2 pt-1 bg-blue-900 h-11 p-2 rounded">
                                    <span className="text-4xl text-sky-400 group-hover:text-white"><PiHandshakeFill /></span>
                                </div>
                                <div className="px-2">
                                <h1 className="text-1xl py-2 tracking-wider font-bold">24/7 Support</h1>
                                <p className="tracking-wider text-slate-300 mb-4">Our expert team is dedicated to deliver exceptional solutions tailored to your need.</p>
                                </div>      
                            </div>
                            <div className="flex items-center justify-start">
                                <Link href="#" className="border bg-sky-400 text-white my-8 py-4 px-12 border-sky-400 border-2 rounded-tr-2xl rounded-bl-2xl tracking-wider font-bold ease-in-out duration-300 hover:bg-slate-950 hover:text-sky-400">See All Services</Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/4 flex items-center justify-center">
                        <img src={Image2.src} alt="" className="w-full max-w-2xl"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-slate-950 w-full flex items-center justify-center">
            <div className="w-full max-w-screen-xl py-16">
                <div className="w-full flex">
                    <div className="w-2/4 flex items-center justify-center">
                        <img src={Image3.src} alt="" className="w-full max-w-2xl"/>
                    </div>
                    <div className="w-2/4">
                        <p className="relative text-sky-400 tracking-wider font-bold before:content-[''] before:w-2 before:h-2 before:bg-sky-400 before:rounded before:absolute before:top-1/3 after:content-[' '] after:w-2 after:h-2 after:bg-sky-400 after:rounded after:absolute after:top-1/3"><span className="pl-3 pr-1">WHY CHOOSE US</span></p>
                        <h1 className="text-4xl py-2 tracking-wider font-bold">Why Our Customers Choose <span className="text-sky-400 relative after:conter-[''] after:w-full after:h-1 after:bg-sky-400 after:absolute after:left-0 after:bottom-0 hover:cursor-default">Working</span> With Us.</h1>
                        <p className="tracking-wider text-slate-300">Our expert team is dedicated to deliver exceptional solutions tailored to your need. Let's bring your to life and create somthing extraordinary together.</p>
                        <div className="w-full my-10">
                            <div className="my-8 w-full flex">
                                <div>
                                    <span className="text-6xl font-bold text-sky-400">01.</span>
                                </div>
                                <div className="px-2">
                                <h1 className="text-1xl py-2 tracking-wider font-bold">Latest Technologies</h1>
                                <p className="tracking-wider text-slate-300 mb-4">Our expert team is dedicated to deliver exceptional solutions tailored to your need.</p>
                                </div>      
                            </div>
                            <div className="my-8 w-full flex">
                                <div>
                                    <span className="text-6xl font-bold text-sky-400">02.</span>
                                </div>
                                <div className="px-2">
                                <h1 className="text-1xl py-2 tracking-wider font-bold">Uniqe Solutions</h1>
                                <p className="tracking-wider text-slate-300 mb-4">Our expert team is dedicated to deliver exceptional solutions tailored to your need.</p>
                                </div>      
                            </div>
                            <div className="my-8 w-full flex">
                                <div>
                                    <span className="text-6xl font-bold text-sky-400">03.</span>
                                </div>
                                <div className="px-2">
                                <h1 className="text-1xl py-2 tracking-wider font-bold">Powerful Strategies</h1>
                                <p className="tracking-wider text-slate-300 mb-4">Our expert team is dedicated to deliver exceptional solutions tailored to your need.</p>
                                </div>      
                            </div>
                            <div className="flex items-center justify-start">
                                <Link href="#" className="border bg-sky-400 text-white my-8 py-4 px-12 border-sky-400 border-2 rounded-tr-2xl rounded-bl-2xl tracking-wider font-bold ease-in-out duration-300 hover:bg-slate-950 hover:text-sky-400">Get In Touch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
        
    </div>
    )
}
export default mainPage;