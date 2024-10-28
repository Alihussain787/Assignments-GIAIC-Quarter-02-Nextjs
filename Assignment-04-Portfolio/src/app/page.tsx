import Link from "next/link";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import { FaArrowRightLong } from "react-icons/fa6";
import { CgDisplayGrid } from "react-icons/cg";
import { SiMaterialdesign } from "react-icons/si";
import { RiPagesFill } from "react-icons/ri";
import { MdPermDataSetting } from "react-icons/md";
import { FaBugSlash } from "react-icons/fa6";
import { BsWindowFullscreen } from "react-icons/bs";

const mainPage = () => {
    return(
    <div>
        <div className="w-full bg-[url('/images/img6.jfif')] no-repeat bg-cover">
           
            <Header />

            <div className="w-full bg-black/40 text-white flex items-center justify-center py-16">
                <div className="w-2/3 flex flex-col items-center justify-center ">
                    <h1 className="text-center text-5xl font-black py-10 leading-normal">Transforming <span className="bg-white text-black px-4 rounded">Ideas</span> into <span className="bg-white text-black px-4 rounded">Interactive</span> Web Experiences</h1>
                    <p className="text-xl text-slate-100">As a skilled web developer with expertise in HTML, CSS, and JavaScript, 
                        I bring your vision to life with clean, 
                        efficient code and a user-focused design. 
                        Whether you need a dynamic website, responsive styling, 
                        I’m here to make it happe.
                    </p>
                    <span className="border rounded py-4 px-10 m-16 text-xl text-bold ease-in-out duration-300 hover:text-white hover:bg-black"><Link href="#">Start Now</Link></span>
                </div>
            </div>
        </div>
        <section className="bg-black text-slate-100 w-full flex items-center justify-center">
            <div className="w-full max-w-screen-xl pt-16">
                <div className="w-full flex items-center justify-center">
                    <h1 className="text-4xl py-2 tracking-wider font-bold">Services</h1>
                </div>
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
        <section className="bg-black text-slate-100 w-full flex items-center justify-center">
            <div className="w-full max-w-screen-xl py-16">
                <div className="w-full flex">
                    <div className="w-2/4">
                        <div className="w-full flex items-center justify-center">
                            <h1 className="text-4xl py-2 tracking-wider font-bold mb-16">About Me</h1>
                        </div>
                        <h1 className="text-xl py-2 tracking-wider font-bold">Hello! I’m a dedicated web developer with a passion for creating clean, responsive, and engaging websites. With a solid foundation in HTML, CSS, and JavaScript, I specialize in building interactive, user-friendly experiences that bring your ideas to life on the web.</h1>
                        <p className="tracking-wider text-slate-300 mt-20">I take pride in my attention to detail and commitment to delivering high-quality work that meets both your technical requirements and business goals. Whether you’re looking to enhance your online presence, optimize performance, or bring a new project to life, I’m here to help every step of the way. As a freelancer on Fiverr, my goal is to make the process smooth, efficient, and focused on achieving your vision.</p>
                    </div>
                    <div className="w-2/4 flex items-center justify-center">
                        <img src="/images/photo-4.png" alt="" className="w-full max-w-2xl"/>
                    </div>
                </div>
            </div>
        </section>    
        <section className="text-slate-100 w-full flex items-center justify-center w-full bg-[url('/images/img5.jpg')] no-repeat bg-cover">
            <div className="bg-black/50 w-full flex items-center justify-center">
            <div className="w-full max-w-screen-xl py-16">
                <h1 className="text-4xl py-2 tracking-wider font-bold flex items-center justify-center">Portfolio</h1>
                <div className="py-10 w-full flex items-center justify-center gap-2">
                    <div className="border w-1/3">
                        <a href="https://assignment-03-giaic-quarter-02-nextjs.vercel.app/"><img src="/images/web1.png" alt="" className="w-full max-w-2xl h-[430px]"/></a>
                    </div>
                    <div className="border w-1/3">
                        <a href="https://assignment-03-giaic-quarter-02-nextjs.vercel.app/"><img src="/images/web2.png" alt="" className="w-full max-w-2xl h-[430px]"/></a>
                    </div>
                    <div className="border w-1/3">
                        <a href="https://assignment-03-giaic-quarter-02-nextjs.vercel.app/"><img src="/images/web1.png" alt="" className="w-full max-w-2xl h-[430px]"/></a>
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