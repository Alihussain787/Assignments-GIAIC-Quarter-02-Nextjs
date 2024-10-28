import Link from "next/link";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import { FaArrowRightLong } from "react-icons/fa6";
import { CgDisplayGrid } from "react-icons/cg";
import { SiMaterialdesign } from "react-icons/si";
import { RiPagesFill } from "react-icons/ri";
import { MdPermDataSetting } from "react-icons/md";
import { FaBugSlash } from "react-icons/fa6";
import { BsWindowFullscreen } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

const servicesPage = () => {
    return(
        <div>
            <div className="w-full bg-[url('/images/img6.jfif')] no-repeat bg-cover">
           
           <Header />

           <div className="w-full bg-black/40 text-white flex items-center justify-center py-20">
               <div className="w-2/3 flex flex-col items-center justify-center ">
                    <h1 className="text-center text-6xl font-black leading-normal">Services</h1>
                    <h1 className="text-center leading-normal flex items-center gap-2"><span className="">< FaHome/></span><Link href="/" className="font-black"> Home </Link><span> / Services</span></h1>
               </div>
           </div>

       </div>
       <section className="bg-black text-slate-100 w-full flex items-center justify-center">
            <div className="w-full max-w-screen-xl pt-16">
                <div className="w-full grid grid-cols-3 gap-4 my-10">
                    <div className="border flex flex-col items-center ease-in-out duration-300 group rounded border-green-600 w-full p-6 hover:bg-green-600 hover:text-white">
                        <span className="text-6xl text-green-600 group-hover:text-white"><SiMaterialdesign /></span>
                        <h1 className="text-xl py-2 tracking-wider font-bold">Custom Website Development</h1>
                        <p className="tracking-wider text-slate-300 mb-4">Transform your ideas into a fully functional, custom website built from scratch. With my expertise in HTML, CSS, and JavaScript, I’ll deliver a site that’s not only visually appealing but also fast, responsive, and optimized for all devices.</p>
                        <Link href="#" className="tracking-wider text-green-600 group-hover:text-white flex items-center">Read more <FaArrowRightLong/></Link>
                    </div>
                    <div className="border flex flex-col items-center ease-in-out duration-300 group rounded border-green-600 w-full p-6 hover:bg-green-600 hover:text-white">
                        <span className="text-6xl text-green-600 group-hover:text-white"><CgDisplayGrid /></span>
                        <h1 className="text-xl py-2 tracking-wider font-bold">Responsive Design</h1>
                        <p className="tracking-wider text-slate-300 mb-4">Ensure that your website looks and works flawlessly on any screen size. I specialize in creating responsive layouts that provide a smooth user experience, from mobile phones to large desktop monitors.</p>
                        <Link href="#" className="tracking-wider text-green-600 group-hover:text-white flex items-center">Read more <FaArrowRightLong/></Link>
                    </div>
                    <div className="border flex flex-col items-center ease-in-out duration-300 group rounded border-green-600 w-full p-6 hover:bg-green-600 hover:text-white">
                        <span className="text-6xl text-green-600 group-hover:text-white"><RiPagesFill /></span>
                        <h1 className="text-xl py-2 tracking-wider font-bold">Landing Page Creation</h1>
                        <p className="tracking-wider text-slate-300 mb-4">Looking to capture leads or promote a product? I design high-converting landing pages tailored to your goals, equipped with sleek visuals, compelling calls to action, and fast-loading performance.</p>
                        <Link href="#" className="tracking-wider text-green-600 group-hover:text-white flex items-center">Read more <FaArrowRightLong/></Link>
                    </div>
                    <div className="border flex flex-col items-center ease-in-out duration-300 group rounded border-green-600 w-full p-6 hover:bg-green-600 hover:text-white">
                        <span className="text-6xl text-green-600 group-hover:text-white"><MdPermDataSetting /></span>
                        <h1 className="text-xl py-2 tracking-wider font-bold">Website Optimization</h1>
                        <p className="tracking-wider text-slate-300 mb-4">Maximize your website’s performance with optimized code, faster load times, and smooth functionality. I analyze your site to enhance both speed and SEO, giving your users the best experience.</p>
                        <Link href="#" className="tracking-wider text-green-600 group-hover:text-white flex items-center">Read more <FaArrowRightLong/></Link>
                    </div>
                    <div className="border flex flex-col items-center ease-in-out duration-300 group rounded border-green-600 w-full p-6 hover:bg-green-600 hover:text-white">
                        <span className="text-6xl text-green-600 group-hover:text-white"><FaBugSlash /></span>
                        <h1 className="text-xl py-2 tracking-wider font-bold">Bug Fixing & Troubleshooting</h1>
                        <p className="tracking-wider text-slate-300 mb-4">Encountering issues on your site? I’ll dive into your code to identify and fix errors, ensuring a seamless experience for your users. Quick and effective troubleshooting is my priority.</p>
                        <Link href="#" className="tracking-wider text-green-600 group-hover:text-white flex items-center">Read more <FaArrowRightLong/></Link>
                    </div>
                    <div className="border flex flex-col items-center ease-in-out duration-300 group rounded border-green-600 w-full p-6 hover:bg-green-600 hover:text-white">
                        <span className="text-6xl text-green-600 group-hover:text-white"><BsWindowFullscreen /></span>
                        <h1 className="text-xl py-2 tracking-wider font-bold">Frontend Enhancements</h1>
                        <p className="tracking-wider text-slate-300 mb-4">Need animations, custom effects, or interactive elements? I’ll add engaging, modern features using JavaScript to make your site more lively and user-friendly.</p>
                        <Link href="#" className="tracking-wider text-green-600 group-hover:text-white flex items-center">Read more <FaArrowRightLong/></Link>
                    </div>
                </div>
            </div>
        </section>
       <Footer />
        </div>
    )
}
export default servicesPage;