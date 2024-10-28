import Link from "next/link";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import { FaHome } from "react-icons/fa";

const portfolioPage = () => {
    return(
        <div>
             <div className="w-full bg-[url('/images/img6.jfif')] no-repeat bg-cover">
           
           <Header />

           <div className="w-full bg-black/40 text-white flex items-center justify-center py-20">
               <div className="w-2/3 flex flex-col items-center justify-center ">
                    <h1 className="text-center text-6xl font-black leading-normal">Portfolio</h1>
                    <h1 className="text-center leading-normal flex items-center gap-2"><span className="">< FaHome/></span><Link href="/" className="font-black"> Home </Link><span> / Portfolio</span></h1>
               </div>
           </div>
       </div>

       <section className="text-slate-100 w-full flex items-center justify-center w-full bg-[url('/images/img5.jpg')] no-repeat bg-cover">
            <div className="bg-black/50 w-full flex items-center justify-center">
            <div className="w-full max-w-screen-xl py-16">
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
export default portfolioPage;