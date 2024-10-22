import Link from "next/link";
import { IoSearch } from "react-icons/io5";
const header = () => {
    return(
        <header className="w-full flex items-center justify-center">
            <nav className="flex items-center justify-between w-full max-w-screen-xl py-10 font-bold">
                <div className="text-2xl"><Link href="/">IT-ExP</Link></div>
                <ul className="flex gap-8">
                    <li className="ease-in-out duration-300 hover:text-sky-400"><Link href="/">Home</Link></li>
                    <li className="ease-in-out duration-300 hover:text-sky-400"><Link href="#">About Us</Link></li>
                    <li className="ease-in-out duration-300 hover:text-sky-400"><Link href="#">Services</Link></li>
                    <li className="ease-in-out duration-300 hover:text-sky-400"><Link href="#">Portfolio</Link></li>
                    <li className="ease-in-out duration-300 hover:text-sky-400"><Link href="#">Blog</Link></li>
                    <li className="ease-in-out duration-300 hover:text-sky-400"><Link href="#">Contact Us</Link></li>
                </ul>
                <div className="text-3xl hover: cursor-pointer"><IoSearch /></div>
            </nav>
        </header>
    )
}
export default header;