import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { CiMobile2 } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const footer = () => {
    return(
        <footer className="w-full bg-blue-950 text-slate-300 flex items-center justify-center">
            <div className="w-full max-w-screen-xl flex">
                <div className="w-2/3 pr-4">
                    <h2 className="text-2xl text-sky-400 font-bold my-8 text-sky-400">IT ExP</h2>
                    <p className="tracking-wider">Our expert team is dedicated to deliver exceptional solutions tailored to your need. Let's bring your to life and create somthing extraordinary together.</p>
                    <div className="my-6 relative">
                        <p className="tracking-wider rounded">Subscribe to our news letter</p>
                        <input className="outline-0 bg-slate-300 text-white py-3 w-full rounded" type="text"/>
                        <button className="bg-sky-400 text-white p-3 rounded-tr rounded-br absolute right-0">Subscribe</button>
                        <p className="tracking-wider">*we will not share your personal info</p>
                    </div>
                    <p>© 2024 Created by: Ali Hussain</p>
                </div>
                    <div className="w-full flex">
                        <div className="w-2/3 py-2 px-2">
                            <h2 className="text-xl text-white font-bold my-8">Useful Links</h2>
                            <ul>
                                <li className="flex items-center py-1"><FaArrowRightLong size="10px"color="skyblue"/> <Link className="px-2 hover:ml-2 hover:ease-in-out hover:duration-300"href="#">Google</Link></li>
                                <li className="flex items-center py-1"><FaArrowRightLong size="10px"color="skyblue"/> <Link className="px-2 hover:ml-2 hover:ease-in-out hover:duration-300"href="#">GitHub</Link></li>
                                <li className="flex items-center py-1"><FaArrowRightLong size="10px"color="skyblue"/> <Link className="px-2 hover:ml-2 hover:ease-in-out hover:duration-300"href="#">Vercel</Link></li>
                                <li className="flex items-center py-1"><FaArrowRightLong size="10px"color="skyblue"/> <Link className="px-2 hover:ml-2 hover:ease-in-out hover:duration-300"href="#">Linkedin</Link></li>
                            </ul>
                        </div>
                        <div className="w-2/3 py-2 px-2">
                        <h2 className="text-xl text-white font-bold my-8">Resources</h2>
                        <ul>
                            <li className="flex items-center py-1"><FaArrowRightLong size="10px"color="skyblue"/> <Link className="px-2 hover:ml-2 hover:ease-in-out hover:duration-300"href="#">Support</Link></li>
                            <li className="flex items-center py-1"><FaArrowRightLong size="10px"color="skyblue"/> <Link className="px-2 hover:ml-2 hover:ease-in-out hover:duration-300"href="#">Dashboard</Link></li>
                            <li className="flex items-center py-1"><FaArrowRightLong size="10px"color="skyblue"/> <Link className="px-2 hover:ml-2 hover:ease-in-out hover:duration-300"href="#">Drivers</Link></li>
                            <li className="flex items-center py-1"><FaArrowRightLong size="10px"color="skyblue"/> <Link className="px-2 hover:ml-2 hover:ease-in-out hover:duration-300"href="#">Projects</Link></li>
                        </ul>
                    </div>
                    <div className="w-full py-2 px-2 pr-20 mr-2 relative">
                        <h2 className="text-xl text-white font-bold my-8">Contact Information</h2>
                        <ul>
                            <li className="flex items-center py-2"><TfiEmail size="25px" color="skyblue"/><span className="px-8 absolute hover:ml-2 hover:ease-in-out hover:duration-300"> alihussainsindhi787@gmail.com</span></li>
                            <li className="flex items-center py-2"><CiLocationOn size="30px" color="skyblue"/><span className="px-8 absolute hover:ml-2 hover:ease-in-out hover:duration-300">Karachi, Pakistan</span></li>
                            <li className="flex items-center py-2"><CiMobile2 size="30px" color="skyblue"/><span className="px-1 hover:ml-2 hover:ease-in-out hover:duration-300">+923122963060</span></li>
                            <div className="flex py-6">
                                <ul className="flex gap-4 text-xl">
                                    <li className="ease-in-out duration-300 pt-2 text-white hover:text-sky-400 hover:pt-0"><a href="#"><FaFacebookF /></a></li>
                                    <li className="ease-in-out duration-300 pt-2 text-white hover:text-sky-400 hover:pt-0"><a href="#"><FaYoutube /></a></li>
                                    <li className="ease-in-out duration-300 pt-2 text-white hover:text-sky-400 hover:pt-0"><a href="#"><FaInstagram /></a></li>
                                    <li className="ease-in-out duration-300 pt-2 text-white hover:text-sky-400 hover:pt-0"><a href="#"><FaXTwitter /></a></li>
                                </ul>
                            </div>
                        </ul>
                        <p className="w-full">Terms of Use | Privacy Policy.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default footer;
