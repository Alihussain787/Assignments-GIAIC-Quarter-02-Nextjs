import Link from "next/link";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import { FaHome } from "react-icons/fa";

const contactPage = () => {
    return(
        <div>
        <div className="w-full bg-[url('/images/img6.jfif')] no-repeat bg-cover">
           
           <Header />

           <div className="w-full bg-black/40 text-white flex items-center justify-center py-20">
               <div className="w-2/3 flex flex-col items-center justify-center ">
                    <h1 className="text-center text-6xl font-black leading-normal">Contact Me</h1>
                    <h1 className="text-center leading-normal flex items-center gap-2"><span className="">< FaHome/></span><Link href="/" className="font-black"> Home </Link><span> / Contact</span></h1>
               </div>
           </div>
       </div>
       <section className="bg-black text-slate-100 w-full flex items-center justify-center">
            <div className="w-full max-w-screen-xl py-20">
                <p className="pb-10">Have a project in mind, or just want to say hello? Fill out the form below, and I’ll get back to you as soon as possible. Let’s discuss how we can bring your vision to life!</p>
                <form action="">
                    <div className="w-full flex gap-6">
                        <div className="w-1/2">
                            <p>Name *</p>
                            <input type="text" className="w-full border border-white/60 bg-transparent outline-0 p-2"/> 
                        </div>
                    
                        <div className="w-1/2">
                            <p>Email *</p>
                            <input type="email" className="w-full border border-white/60 bg-transparent outline-0 p-2"/>
                        </div>   
                    </div>
        
                    <div className="my-6">
                        <p>Subject *</p>
                        <input type="text" className="w-full border border-white/60 bg-transparent outline-0 p-2"/>
                    </div>

                    <div>
                        <p>Your Message *</p>
                        <textarea name="" id="" className="w-full h-[100px] border border-white/60 bg-transparent outline-0 p-2 resize-none"></textarea>
                    </div>
                    <div className="my-6">
                        <button className="border border-white/60 rounded py-4 px-10 text-xl text-bold ease-in-out duration-300 hover:text-black hover:bg-white">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
       <Footer />
        </div>
    )
}
export default contactPage;