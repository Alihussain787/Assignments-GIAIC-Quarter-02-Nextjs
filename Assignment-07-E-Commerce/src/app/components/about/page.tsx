
import Image from "next/image";
import Link from "next/link";
const AboutPage = () => {
    return(
    <div className="px-20">
        <section className="w-full py-20 h-[525px] flex items-center justify-center max-md:mt-[505px]">
        <div className="w-full flex justify-between max-md:flex-col">
            <div className="text-black flex flex-col gap-[35px] justify-center">
                <div className="flex flex-col gap-[35px] max-md:items-center">
                    <p className="text-[16px] font-bold text-[#252B42]">ABOUT COMPANY</p>
                    <h1 className="text-[58px] font-bold">ABOUT US</h1> 
                    <p className="text-[20px] text-[#737373] max-md:w-[350px] max-md:text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laboriosam numquam, facilis tempora officia fuga libero perferendis eligendi odio necessitatibus beatae earum officiis qui quos laborum accusamus enim perspiciatis dicta.</p>  
                </div>
                <div className="w-[195px] flex items-center justify-center rounded text-[14px] bg-[#23A6F0] text-white font-bold flex items-center gap-[5px] max-md:ml-[30%]">
                    <Link href={"#"} className="flex gap-2 py-4 px-4 text-center">Become a member</Link>
                </div>
            </div>
        </div>
        </section>
    </div>
    )
}
export default AboutPage;
