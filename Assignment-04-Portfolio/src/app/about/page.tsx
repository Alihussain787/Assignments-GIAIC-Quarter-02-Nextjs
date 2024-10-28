import Link from "next/link";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import { FaHome } from "react-icons/fa";
const aboutPage = () => {
    return(
        <div>
        <div className="w-full bg-[url('/images/img6.jfif')] no-repeat bg-cover">
           
           <Header />

           <div className="w-full bg-black/40 text-white flex items-center justify-center py-20">
               <div className="w-2/3 flex flex-col items-center justify-center ">
                    <h1 className="text-center text-6xl font-black leading-normal">About Me</h1>
                    <h1 className="text-center leading-normal flex items-center gap-2"><span className="">< FaHome/></span><Link href="/" className="font-black"> Home </Link><span> / About</span></h1>
               </div>
           </div>


       </div>
       <section className="bg-black text-slate-100 w-full flex items-center justify-center">
            <div className="w-full max-w-screen-xl py-20">
                <div className="w-full flex">
                    <div className="w-2/4 mt-8">
                        <h1 className="text-xl py-2 tracking-wider font-bold">Hello! I’m a dedicated web developer with a passion for creating clean, responsive, and engaging websites. With a solid foundation in HTML, CSS, and JavaScript, I specialize in building interactive, user-friendly experiences that bring your ideas to life on the web.</h1>
                        <p className="tracking-wider text-slate-300 mt-20">I take pride in my attention to detail and commitment to delivering high-quality work that meets both your technical requirements and business goals. Whether you’re looking to enhance your online presence, optimize performance, or bring a new project to life, I’m here to help every step of the way. As a freelancer on Fiverr, my goal is to make the process smooth, efficient, and focused on achieving your vision.</p>
                    </div>
                    <div className="w-2/4 flex items-center justify-center">
                        <img src="/images/photo-4.png" alt="" className="w-full max-w-2xl"/>
                    </div>
                </div>
            </div>
        </section>    
        <Footer />
            
        </div>
    )
}
export default aboutPage;