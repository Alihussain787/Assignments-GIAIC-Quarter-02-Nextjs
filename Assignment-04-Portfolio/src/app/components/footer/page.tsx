import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const footer = () => {
    return(
        <footer className="w-full bg-green-600">
        <div className="w-full flex items-center justify-center">
        <div className="w-1/2 max-w-screen-xl my-12 flex items-center justify-center">
                <div className="w-full">
                    <h2 className="text-4xl text-white font-bold py-4 pb-10 flex items-center justify-center">Get In Touch</h2>
                    <div className="flex items-center justify-center">
                        <ul className="flex gap-4 text-1xl">
                            <li className="ease-in-out- duration-300 border border-black p-2 text-black hover:border-white hover:text-white"><a href="#"><FaFacebookF /></a></li>
                            <li className="ease-in-out- duration-300 border border-black p-2 text-black hover:border-white hover:text-white"><a href="#"><FaYoutube /></a></li>
                            <li className="ease-in-out- duration-300 border border-black p-2 text-black hover:border-white hover:text-white"><a href="#"><FaInstagram /></a></li>
                            <li className="ease-in-out- duration-300 border border-black p-2 text-black hover:border-white hover:text-white"><a href="#"><FaXTwitter /></a></li>
                        </ul>
                    </div>
                    <p className="py-4 tracking-wider text-black flex items-center justify-center">Let's Create Somthing Extraordinary Together.</p>
                    <div className="flex items-center justify-center">
                        <input className="outline-0 border border-black bg-swhite text-black p-3 w-2/3 rounded" type="text" placeholder="Email"/>
                    </div>
                    <div className="flex items-center justify-center my-4">
                        <button className="bg-black border border-black text-white py-3 px-10 rounded-tr rounded-br ease-in-out duration-300 hover:bg-white hover:text-black">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full bg-black text-white py-6 flex items-center justify-center">
            <p>© 2024 All Rights Reserved | Design by: Ali Hussain</p>
        </div>
        </footer>
    )
}
export default footer;