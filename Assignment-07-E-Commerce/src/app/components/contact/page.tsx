
import Image from "next/image";
import Link from "next/link";
const Contact = () => {
    return(
    <div>
        <section className="container2 w-full py-20 px-20 flex items-center justify-center  max-md:mt-[505px]">
        <div>
            <div className="text-black flex flex-col gap-[35px] justify-center">
                <div className=" flex flex-col gap-[35px] max-md:items-center">
                    <p className="text-[16px] font-bold text-[#252B42]">CONTACT US</p>
                    <h1 className="text-[58px] text-[#252B42] font-bold max-md:text-[40px]">Get in touch today!</h1> 
                    <p className="text-[20px] text-[#737373] max-md:w-[350px] max-md:text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nostrum quibusdam sit nihil enim magnam libero cum veniam placeat aliquam expedita error harum illo temporibus, quidem qui dignissimos vel vitae!</p>  
                    <p className="text-[24px] font-bold text-[#252B42]">Phone : 923333333333 </p>
                    <p className="text-[24px] font-bold text-[#252B42]">EMail: xyz@mail.com</p>
                </div>
            </div>
        </div>
        </section>
    </div>
    )
}
export default Contact;
