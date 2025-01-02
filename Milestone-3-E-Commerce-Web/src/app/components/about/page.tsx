import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
const AboutPage = () => {
    return(
    <div>
        <section className="w-full py-2 flex flex-col px-20">
            <div className="w-full h-screen flex justify-between max-md:flex-col max-md:h-full max-md:py-10">
                <div className="w-full flex flex-col justify-center gap-10 max-md:items-center">
                    <h3 className="text-5xl font-bold">About Us</h3>
                    <p className="max-md:text-center">Welcome to WebStore, your one-stop destination for high-quality fashion, tech gadgets, home essential.</p>
                    <p className='w-[200px] flex justify-center'> <FaArrowDown className='text-2xl text-black animate-bounce w-6 h-6 ...'/></p>
                    <Link href={"/components/products"} className='w-[200px] font-bold flex items-center justify-center text-[#252B42] bg-[#23A6F0] px-4 py-4 rounded hover:bg-[#252B42] hover:text-white duration-200'>
                        Explore Products
                    </Link>
                </div>
                <div className="w-full flex justify-end items-center max-md:justify-center">
                    <Image src={"/woman-shopping.png"} width={500} height={500} alt="image" className="w-full max-w-[350px] h-[500px]"></Image>
                </div>
            </div>
        </section>
        <section className="w-full bg-white flex flex-col p-10">
        <div className="w-full flex flex-col gap-10">
                <div className="flex flex-col gap-2 items-center">
                    <h3 className="text-5xl font-bold">Meet Our Team</h3>
                    <p className="w-1/3 text-center max-md:w-full">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                </div>
            <div className="flex gap-4 items-center justify-center">
                <div className="flex items-center justify-center gap-10 max-md:flex-col">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Image src={"/image1.jpg"} width={500} height={500} alt="image" className="w-full max-w-[300px] h-[350px] rounded"></Image>
                        <h3 className="font-bold text-xl">Web Desinger</h3>
                        <p>Web Desinger</p>
                        <div className="flex justify-center items-center max-md:flex-col">
                            <ul className="flex gap-[12px] text-[#252B42] text-xl">
                                <li className="cursor-pointer">
                                    <FaFacebook className="hover:text-white duration-200"/>
                                </li>
                                <li className="cursor-pointer">
                                    <FaInstagramSquare className="hover:text-white duration-200"/>
                                </li>
                                <li className="cursor-pointer">
                                    <FaTwitterSquare className="hover:text-white duration-200"/>
                                </li>                                                   
                             </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Image src={"/image2.jpg"} width={500} height={500} alt="image" className="w-full max-w-[300px] h-[350px] rounded"></Image>
                        <h3 className="font-bold text-xl">Web Desinger</h3>
                        <p>Web Desinger</p>
                        <div className="flex justify-center items-center max-md:flex-col">
                            <ul className="flex gap-[12px] text-[#252B42] text-xl">
                                <li className="cursor-pointer">
                                    <FaFacebook className="hover:text-white duration-200"/>
                                </li>
                                <li className="cursor-pointer">
                                    <FaInstagramSquare className="hover:text-white duration-200"/>
                                </li>
                                <li className="cursor-pointer">
                                    <FaTwitterSquare className="hover:text-white duration-200"/>
                                </li>                                                   
                             </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Image src={"/image3.jpg"} width={500} height={500} alt="image" className="w-full max-w-[300px] h-[350px] rounded"></Image>
                        <h3 className="font-bold text-xl">Web Desinger</h3>
                        <p>Web Desinger</p>
                        <div className="flex justify-center items-center max-md:flex-col">
                            <ul className="flex gap-[12px] text-[#252B42] text-xl">
                                <li className="cursor-pointer">
                                    <FaFacebook className="hover:text-white duration-200"/>
                                </li>
                                <li className="cursor-pointer">
                                    <FaInstagramSquare className="hover:text-white duration-200"/>
                                </li>
                                <li className="cursor-pointer">
                                    <FaTwitterSquare className="hover:text-white duration-200"/>
                                </li>                                                   
                             </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
    )
}
export default AboutPage;
