import React from "react";
import Header from "./components/header/page";
import Image from "next/image";
const mainPage = () => {
    return(
    <div>
        <Header />

        <section className="w-[1902px] bg-white">
            <div className="flex">
                <div>
                    <h1 className="text-[40px] font-bold w-[496px] h-[189px] mt-[316px] ml-[176px] text-black">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
                    <p className="w-[902px] h-[147px] ml-[171px] text-[30px] font-medium text-primarysec">An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
                    <button className="ml-[176px] w-[288px] h-[58px] bg-primary rounded-[10px] text-white text-[30px] font-medium">Explore Now</button>
                </div>
                <div className="p-[150px] flex items-center justify-center relative">
                    <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/slider-1.svg"} 
                    alt={"image"} 
                    width={"490"} 
                    height={"667"}/>
                    <div className="border border-white/50 w-[442px] h-[611px] absolute rounded-tl-[25%] rounded-br-[25%]"></div>
                </div>
            </div>
        </section>
    </div>
    )
}
export default mainPage;