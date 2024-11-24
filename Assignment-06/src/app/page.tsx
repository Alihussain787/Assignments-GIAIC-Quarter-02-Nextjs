import Header from "./components/header/page";
import Footer from "./components/footer/page";
import Image from "next/image";
const mainPage = () => {
    return(
    <div>
        <Header />

        <section className="w-[1280px] flex max-md:w-full max-md:max-w-3xl max-md:flex-col">
            <div className="w-[720px] flex flex-col justify-center pl-[80px] pr-[60px] max-md:px-6 max-md:w-full max-md:max-w-3xl max-md:py-[100px] max-md:gap-[24px]">
                <div className="w-[580px] flex flex-col max-md:w-full max-md:max-w-3xl max-md:gap-[24px]">
                    <h1 className="text-[56px] font-bold">Learn new skills online with ease</h1>
                    <p className="text-[18px] w-[500px] pb-8 max-md:w-full">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
                </div>
                <div className="flex gap-[16px]">
                    <button className="bg-black text-white px-[24px] py-[12px] rounded-[5px] max-md:w-[50%]">Start learn</button>
                    <button className="border border-black px-[24px] py-[12px] rounded-[5px] max-md:w-[50%]">Explore more</button>
                </div>
            </div>
            <div className="max-md:w-full max-md:max-w-3xl max-md:truncate">
                <Image src={"/images/Image.svg"} alt={"image"} width={"768"} height={"900"}/>
            </div>
        </section>
        <section className="w-[1280px] bg-[#F7F7F7] flex items-center justify-between py-[64px] max-md:w-full max-md:max-w-3xl max-md:px-6 max-md:block max-md:bg-white max-md:block">
            <div>
                <h3 className="text-[24px] font-bold max-md:text-[18px]">Trusted by the world's best companies [social proof to build credibility]</h3>
            </div>
            <div className="max-md:w-full max-md:max-w-3xl max-md:mt-[24px] max-md:truncate max-md:py-[16px]">
                <ul className="flex gap-[19px] py-[8px] max-md:w-[1376px]">
                    <li><Image src={"/images/logo1.svg"} alt={"logo1"} width={"123"} height={"38"}/></li>
                    <li><Image src={"/images/logo2.svg"} alt={"logo2"} width={"123"} height={"38"}/></li>
                    <li><Image src={"/images/logo3.svg"} alt={"logo3"} width={"123"} height={"38"}/></li>
                    <li><Image src={"/images/logo4.svg"} alt={"logo4"} width={"123"} height={"38"}/></li>
                    <li><Image src={"/images/logo5.svg"} alt={"logo5"} width={"123"} height={"38"}/></li>
                    <li><Image src={"/images/logo6.svg"} alt={"logo6"} width={"123"} height={"38"}/></li>
                </ul>
            </div>
        </section>
        <section className="w-[1280px] flex flex-col items-center justify-center gap-[64px] py-[64px] max-md:w-full max-md:max-w-3xl">
            <div className="w-full max-md:px-6 max-md:text-center">
                <h1 className="text-[48px] font-bold max-md:text-[32px] max-md:mb-[24px]">Explore Courses By Category</h1>
                <p className="text-[18px]">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
            </div>
            <div className="main max-md:flex max-md:flex-col max-md:gap-6 max-md:w-full max-md:max-w-3xl max-md:px-6">
                <div className="bg-[#F7F7F7] w-[410px] flex items-center p-[16px] gap-[32px] max-md:w-full max-md:max-w-3xl">
                    <span className="bg-white p-[34px] rounded-[5px]"><Image src={"/images/icon1.svg"} alt={"icon1"} width={"32"} height={"32"}/></span>
                    <span>
                        <h3 className="text-[20px]">Design & Development</h3>
                        <p>50+ Courses Available</p>
                    </span>
                </div>
                <div className="bg-[#F7F7F7] w-[410px] flex items-center p-[16px] gap-[32px] max-md:w-full max-md:max-w-3xl">
                    <span className="bg-white p-[34px] rounded-[5px]"><Image src={"/images/icon2.svg"} alt={"icon1"} width={"32"} height={"32"}/></span>
                    <span>
                        <h3 className="text-[20px]">Marketing</h3>
                        <p>50+ Courses Available</p>
                    </span>
                </div>
                <div className="bg-[#F7F7F7] w-[410px] flex items-center p-[16px] gap-[32px] max-md:w-full max-md:max-w-3xl">
                    <span className="bg-white p-[34px] rounded-[5px]"><Image src={"/images/icon3.svg"} alt={"icon1"} width={"32"} height={"32"}/></span>
                    <span>
                        <h3 className="text-[20px]">Development</h3>
                        <p>50+ Courses Available</p>
                    </span>
                </div>
                <div className="bg-[#F7F7F7] w-[410px] flex items-center p-[16px] gap-[32px] max-md:w-full max-md:max-w-3xl max-md:w-[720px]">
                    <span className="bg-white p-[34px] rounded-[5px]"><Image src={"/images/icon4.svg"} alt={"icon1"} width={"32"} height={"32"}/></span>
                    <span>
                        <h3 className="text-[20px]">Communication</h3>
                        <p>50+ Courses Available</p>
                    </span>
                </div>
                <div className="bg-[#F7F7F7] w-[410px] flex items-center p-[16px] gap-[32px] max-md:w-full max-md:max-w-3xl">
                    <span className="bg-white p-[34px] rounded-[5px]"><Image src={"/images/icon5.svg"} alt={"icon1"} width={"32"} height={"32"}/></span>
                    <span>
                        <h3 className="text-[20px]">Digital Marketing</h3>
                        <p>50+ Courses Available</p>
                    </span>
                </div>
                <div className="bg-[#F7F7F7] w-[410px] flex items-center p-[16px] gap-[32px] max-md:w-full max-md:max-w-3xl">
                    <span className="bg-white p-[34px] rounded-[5px]"><Image src={"/images/icon6.svg"} alt={"icon1"} width={"32"} height={"32"}/></span>
                    <span>
                        <h3 className="text-[20px]">Self Development</h3>
                        <p>50+ Courses Available</p>
                    </span>
                </div>
                <div className="bg-[#F7F7F7] w-[410px] flex items-center p-[16px] gap-[32px] max-md:w-full max-md:max-w-3xl">
                    <span className="bg-white p-[34px] rounded-[5px]"><Image src={"/images/icon7.svg"} alt={"icon1"} width={"32"} height={"32"}/></span>
                    <span>
                        <h3 className="text-[20px]">Business</h3>
                        <p>50+ Courses Available</p>
                    </span>
                </div>
                <div className="bg-[#F7F7F7] w-[410px] flex items-center p-[16px] gap-[32px] max-md:w-full max-md:max-w-3xl">
                    <span className="bg-white p-[34px] rounded-[5px]"><Image src={"/images/icon8.svg"} alt={"icon1"} width={"32"} height={"32"}/></span>
                    <span>
                        <h3 className="text-[20px]">Finance</h3>
                        <p>50+ Courses Available</p>
                    </span>
                </div>
                <div className="bg-[#F7F7F7] w-[410px] flex items-center p-[16px] gap-[32px] max-md:w-full max-md:max-w-3xl">
                    <span className="bg-white p-[34px] rounded-[5px]"><Image src={"/images/icon9.svg"} alt={"icon1"} width={"32"} height={"32"}/></span>
                    <span>
                        <h3 className="text-[20px]">Consulting</h3>
                        <p>50+ Courses Available</p>
                    </span>
                </div>
            </div>
            <button className="border border-black py-[12px] px-[24px] rounded-[5px]">View All Courses</button>
        </section>
        <section className="border w-[1280px] flex flex-col items-center justify-center gap-[64px] py-[64px] max-md:w-full max-md:max-w-3xl">
            <div className="w-[1152px] flex flex-col items-center gap-[16px] max-md:w-[768px] max-md:w-full max-md:max-w-3xl">
                <h1 className="text-[48px] font-bold">Our Achivements</h1>
                <p className="text-center max-md:w-full max-md:max-w-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>
            <div className="achivements w-[1280px] flex items-center justify-center gap-[24px] max-md:w-full max-md:max-w-3xl">
                <div className="w-[296px]">
                    <h1 className="text-center text-[40px] font-bold">+200</h1>
                    <p className="text-center">Courses</p>
                </div>
                <div className="w-[296px]">
                    <h1 className="text-center text-[40px] font-bold">+50k</h1>
                    <p className="text-center">Menotrs</p>
                </div>
                <div className="w-[296px]">
                    <h1 className="text-center text-[40px] font-bold">+357k</h1>
                    <p className="text-center">Students</p>
                </div>
                <div className="w-[296px]">
                    <h1 className="text-center text-[40px] font-bold">+100</h1>
                    <p className="text-center">Recognition</p>
                </div>
            </div>
        </section>
        <section className="w-[1280px] flex flex-col items-center justify-center gap-[64px] py-[64px] mt-[64px] max-md:w-full max-md:max-w-3xl max-md:hidden">
            <div className="w-[1152px] flex flex-col items-center gap-[16px] max-md:w-full max-md:max-w-3xl">
                <h1 className="text-[48px] font-bold">Our Achivements</h1>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>
            <div className="achivements w-[1280px] flex items-center justify-center gap-[24px] max-md:w-full max-md:max-w-3xl">
                <div className="w-[296px]">
                    <h1 className="text-center text-[40px] font-bold">+200</h1>
                    <p className="text-center">Courses</p>
                </div>
                <div className="w-[296px] max-md:w-full max-md:max-w-3xl">
                    <h1 className="text-center text-[40px] font-bold">+50k</h1>
                    <p className="text-center">Menotrs</p>
                </div>
                <div className="w-[296px] max-md:w-full max-md:max-w-3xl">
                    <h1 className="text-center text-[40px] font-bold">+357k</h1>
                    <p className="text-center">Students</p>
                </div>
                <div className="w-[296px] max-md:w-full max-md:max-w-3xl">
                    <h1 className="text-center text-[40px] font-bold">+100</h1>
                    <p className="text-center">Recognition</p>
                </div>
            </div>
        </section>
        <section className="w-[1280px] flex flex-col items-center justify-center gap-[64px] py-[64px] mt-[64px] max-md:w-full max-md:max-w-3xl">
            <div className="w-[1152px] flex flex-col items-center gap-[16px] max-md:w-full max-md:max-w-3xl">
                <h1 className="text-[56px] font-bold">Courses</h1>
                <p className="text-center text-[18px]">Your Ultimate Guide to learning</p>
            </div>
            <div className="w-[336px] flex flex-col items-center gap-[16px] max-md:w-full max-md:max-w-3xl">
                <ul className="flex">
                    <li className="py-[8px] px-[16px] border-b border-black"><a href="#">Popular</a></li>
                    <li className="py-[8px] px-[16px]"><a href="#">Recommended</a></li>
                    <li className="py-[8px] px-[16px]"><a href="#">Best Price</a></li>
                </ul>
            </div>
            <div className="courses max-md:w-full max-md:max-w-3xl] max-md:block max-md:px-6">
                <div className="w-[416px] bg-[#F7F7F7] flex flex-col gap-[24px] max-md:w-full max-md:max-w-3xl max-md:my-4">
                    <div className="max-md:w-full max-md:max-w-3xl">
                        <Image className="max-md:w-full max-md:max-w-3xl" src={"/images/c-image-1.svg"} alt={"image"} width={"416"} height={"300"}/>
                    </div>
                    <div className="flex flex-col gap-[24px] p-4">
                        <div className="flex justify-between text-[14px] font-medium">
                            <span>Design</span>
                            <span className="flex items-center gap-2"><Image src={"/images/star-1.svg"} alt={"image"} width={"14"} height={"14"}/>5.0</span>
                        </div>
                        <h3 className="text-[24px] font-bold">UX/UI Design 201</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        <div className="flex items-center gap-4">
                            <button className="border border-black py-[8px] px-[20px] rounded-[5px]">Enroll Now</button>
                            <p>$400</p>
                        </div>
                    </div>
                </div>
                <div className="w-[416px] bg-[#F7F7F7] flex flex-col gap-[24px] max-md:w-full max-md:max-w-3xl max-md:my-4">
                    <div>
                        <Image className="max-md:w-full max-md:max-w-3xl" src={"/images/c-image-2.svg"} alt={"image"} width={"416"} height={"300"}/>
                    </div>
                    <div className="flex flex-col gap-[24px] p-4 max-md:w-full max-md:max-w-3xl">
                        <div className="flex justify-between text-[14px] font-medium">
                            <span>Programming</span>
                            <span className="flex items-center gap-2"><Image src={"/images/star-1.svg"} alt={"image"} width={"14"} height={"14"}/>5.0</span>
                        </div>
                        <h3 className="text-[24px] font-bold">Introducton to python</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        <div className="flex items-center gap-4">
                            <button className="border border-black py-[8px] px-[20px] rounded-[5px]">Enroll Now</button>
                            <p>$400</p>
                        </div>
                    </div>
                </div>
                <div className="w-[416px] bg-[#F7F7F7] flex flex-col gap-[24px] max-md:w-full max-md:max-w-3xl max-md:my-4">
                    <div>
                        <Image className="max-md:w-full max-md:max-w-3xl" src={"/images/c-image-3.svg"} alt={"image"} width={"416"} height={"300"}/>
                    </div>
                    <div className="flex flex-col gap-[24px] p-4 max-md:w-full max-md:max-w-3xl">
                        <div className="flex justify-between text-[14px] font-medium">
                            <span>Business</span>
                            <span className="flex items-center gap-2"><Image src={"/images/star-1.svg"} alt={"image"} width={"14"} height={"14"}/>5.0</span>
                        </div>
                        <h3 className="text-[24px] font-bold">Data Analysis for Beginners</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        <div className="flex items-center gap-4">
                            <button className="border border-black py-[8px] px-[20px] rounded-[5px]">Enroll Now</button>
                            <p>$400</p>
                        </div>
                    </div>
                </div>
                <div className="w-[416px] bg-[#F7F7F7] flex flex-col gap-[24px] max-md:w-full max-md:max-w-3xl max-md:my-4">
                    <div>
                        <Image className="max-md:w-full max-md:max-w-3xl" src={"/images/c-image-4.svg"} alt={"image"} width={"416"} height={"300"}/>
                    </div>
                    <div className="flex flex-col gap-[24px] p-4 max-md:w-full max-md:max-w-3xl">
                        <div className="flex justify-between text-[14px] font-medium">
                            <span>Art</span>
                            <span className="flex items-center gap-2"><Image src={"/images/star-1.svg"} alt={"image"} width={"14"} height={"14"}/>5.0</span>
                        </div>
                        <h3 className="text-[24px] font-bold">Art Specialization</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        <div className="flex items-center gap-4">
                            <button className="border border-black py-[8px] px-[20px] rounded-[5px]">Enroll Now</button>
                            <p>$400</p>
                        </div>
                    </div>
                </div>
                <div className="w-[416px] bg-[#F7F7F7] flex flex-col gap-[24px] max-md:w-full max-md:max-w-3xl max-md:my-4">
                    <div>
                        <Image className="max-md:w-full max-md:max-w-3xl" src={"/images/c-image-5.svg"} alt={"image"} width={"416"} height={"300"}/>
                    </div>
                    <div className="flex flex-col gap-[24px] p-4 max-md:w-full max-md:max-w-3xl">
                        <div className="flex justify-between text-[14px] font-medium">
                            <span>Law</span>
                            <span className="flex items-center gap-2"><Image src={"/images/star-1.svg"} alt={"image"} width={"14"} height={"14"}/>5.0</span>
                        </div>
                        <h3 className="text-[24px] font-bold">Rule of Law</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        <div className="flex items-center gap-4">
                            <button className="border border-black py-[8px] px-[20px] rounded-[5px]">Enroll Now</button>
                            <p>$400</p>
                        </div>
                    </div>
                </div>
                <div className="w-[416px] bg-[#F7F7F7] flex flex-col gap-[24px] max-md:w-full max-md:max-w-3xl max-md:my-4">
                    <div>
                        <Image className="max-md:w-full max-md:max-w-3xl" src={"/images/c-image-6.svg"} alt={"image"} width={"416"} height={"300"}/>
                    </div>
                    <div className="flex flex-col gap-[24px] p-4 max-md:w-full max-md:max-w-3xl">
                        <div className="flex justify-between text-[14px] font-medium">
                            <span>Tech</span>
                            <span className="flex items-center gap-2"><Image src={"/images/star-1.svg"} alt={"image"} width={"14"} height={"14"}/>5.0</span>
                        </div>
                        <h3 className="text-[24px] font-bold">Introduction to webflow</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        <div className="flex items-center gap-4">
                            <button className="border border-black py-[8px] px-[20px] rounded-[5px]">Enroll Now</button>
                            <p>$400</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="border border-black py-[12px] px-[24px] rounded-[5px]">View All Courses</button>
        </section>
        <section className="w-[1280px] bg-[#F7F7F7] flex flex-col items-center justify-center gap-[64px] py-[64px] mt-[64px] max-md:w-full max-md:max-w-3xl">
            <div className="w-[1152px] flex flex-col items-center gap-[16px]">
                <h1 className="text-[48px] font-bold">Our Team</h1>
                <p className="text-center text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="courses max-md:block">
                <div className="w-[416px] bg-[#F7F7F7] flex flex-col items-center gap-[24px]">
                    <div>
                        <Image src={"/images/profile1.svg"} alt={"image"} width={"80"} height={"80"}/>
                    </div>
                    <div className="flex flex-col pb-16">
                        <p className="text-[20px] font-medium text-center">James Nduku</p>
                        <p className="text-center">Marketing Coordinator</p>
                    </div>
                    <div className="pb-16">
                        <ul className="flex items-center gap-[12px]">
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/l-icon.svg"} 
                                alt={"icon"} 
                                width={"20"} 
                                height={"20"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/t-icon.svg"} 
                                alt={"icon"} 
                                width={"20"} 
                                height={"20"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/ico.svg"} 
                                alt={"icon"} 
                                width={"24"} 
                                height={"24"}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-[416px] bg-[#F7F7F7] flex flex-col items-center gap-[24px]">
                    <div>
                        <Image src={"/images/profile2.svg"} alt={"image"} width={"80"} height={"80"}/>
                    </div>
                    <div className="flex flex-col pb-16">
                        <p className="text-[20px] font-medium text-center">Joseph Munyambu</p>
                        <p className="text-center">Nursing Assistant</p>
                    </div>
                    <div className="pb-16">
                        <ul className="flex items-center gap-[12px]">
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/l-icon.svg"} 
                                alt={"icon"} 
                                width={"20"} 
                                height={"20"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/t-icon.svg"} 
                                alt={"icon"} 
                                width={"20"} 
                                height={"20"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/ico.svg"} 
                                alt={"icon"} 
                                width={"24"} 
                                height={"24"}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-[416px] bg-[#F7F7F7] flex flex-col items-center gap-[24px]">
                    <div>
                        <Image src={"/images/profile3.svg"} alt={"image"} width={"80"} height={"80"}/>
                    </div>
                    <div className="flex flex-col pb-16">
                        <p className="text-[20px] font-medium text-center">Joseph Ngumbau</p>
                        <p className="text-center">Medical Assistant</p>
                    </div>
                    <div className="pb-16">
                        <ul className="flex items-center gap-[12px]">
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/l-icon.svg"} 
                                alt={"icon"} 
                                width={"20"} 
                                height={"20"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/t-icon.svg"} 
                                alt={"icon"} 
                                width={"20"} 
                                height={"20"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/ico.svg"} 
                                alt={"icon"} 
                                width={"24"} 
                                height={"24"}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-[416px] bg-[#F7F7F7] flex flex-col items-center gap-[24px] max-md:hidden">
                    <div>
                        <Image src={"/images/profile4.svg"} alt={"image"} width={"80"} height={"80"}/>
                    </div>
                    <div className="flex flex-col pb-16">
                        <p className="text-[20px] font-medium text-center">Erick Kipkemboi</p>
                        <p className="text-center">Web Designer</p>
                    </div>
                    <div className="pb-16">
                        <ul className="flex items-center gap-[12px]">
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/l-icon.svg"} 
                                alt={"icon"} 
                                width={"20"} 
                                height={"20"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/t-icon.svg"} 
                                alt={"icon"} 
                                width={"20"} 
                                height={"20"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/ico.svg"} 
                                alt={"icon"} 
                                width={"24"} 
                                height={"24"}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-[416px] bg-[#F7F7F7] flex flex-col items-center gap-[24px] max-md:hidden">
                    <div>
                        <Image src={"/images/profile5.svg"} alt={"image"} width={"80"} height={"80"}/>
                    </div>
                    <div className="flex flex-col pb-16">
                        <p className="text-[20px] font-medium text-center">Stephen Kerubo</p>
                        <p className="text-center">President of Sales</p>
                    </div>
                    <div className="pb-16">
                        <ul className="flex items-center gap-[12px]">
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/l-icon.svg"} 
                                alt={"icon"} 
                                width={"20"} 
                                height={"20"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/t-icon.svg"} 
                                alt={"icon"} 
                                width={"20"} 
                                height={"20"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/ico.svg"} 
                                alt={"icon"} 
                                width={"24"} 
                                height={"24"}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-[416px] bg-[#F7F7F7] flex flex-col items-center gap-[24px] max-md:hidden">
                    <div>
                        <Image src={"/images/profile6.svg"} alt={"image"} width={"80"} height={"80"}/>
                    </div>
                    <div className="flex flex-col pb-16">
                        <p className="text-[20px] font-medium text-center">John Leboo</p>
                        <p className="text-center">Dog Trainer</p>
                    </div>
                    <div className="pb-16">
                        <ul className="flex items-center gap-[12px]">
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/l-icon.svg"} 
                                alt={"icon"} 
                                width={"20"} 
                                height={"20"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/t-icon.svg"} 
                                alt={"icon"} 
                                width={"20"} 
                                height={"20"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/images/ico.svg"} 
                                alt={"icon"} 
                                width={"24"} 
                                height={"24"}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-[1280px] bg-[#F7F7F7] flex flex-col items-center justify-center gap-[64px] py-[64px] max-md:hidden">
            <div className="w-[1152px] flex flex-col gap-[16px]">
                <h1 className="text-[48px] font-bold">Customer testimonials</h1>
                <p className="text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex flex-col gap-[48px]">
                <div className="flex gap-[32px] w-[1152px]">
                    <div className="border border-black p-[32px] w-[362px] flex flex-col gap-[32px]">
                        <ul className="flex gap-2">
                            <li><Image src={"/images/black-star.svg"} alt={"image"} width={"20"} height={"18"}/></li>
                            <li><Image src={"/images/black-star.svg"} alt={"image"} width={"20"} height={"18"}/></li>
                            <li><Image src={"/images/black-star.svg"} alt={"image"} width={"20"} height={"18"}/></li>
                            <li><Image src={"/images/black-star.svg"} alt={"image"} width={"20"} height={"18"}/></li>
                            <li><Image src={"/images/black-star.svg"} alt={"image"} width={"20"} height={"18"}/></li>
                        </ul>
                        <div className="w-[298px] flex flex-col gap-[24px]">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                            <span className="flex items-center gap-[20px]">
                                <Image src={"/images/profile3.svg"} alt={"image"} width={"56"} height={"56"} className="rounded-[50%]"/>
                                <span>
                                    <h3 className="text-[16px] font-semibold">James Nduku</h3>
                                    <p className="text-[16px]">Software Developer</p>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="border border-black p-[32px] w-[362px] flex flex-col gap-[32px]">
                        <ul className="flex gap-2">
                            <li><Image src={"/images/black-star.svg"} alt={"image"} width={"20"} height={"18"}/></li>
                            <li><Image src={"/images/black-star.svg"} alt={"image"} width={"20"} height={"18"}/></li>
                            <li><Image src={"/images/black-star.svg"} alt={"image"} width={"20"} height={"18"}/></li>
                            <li><Image src={"/images/black-star.svg"} alt={"image"} width={"20"} height={"18"}/></li>
                            <li><Image src={"/images/black-star.svg"} alt={"image"} width={"20"} height={"18"}/></li>
                        </ul>
                        <div className="w-[298px] flex flex-col gap-[24px]">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                            <span className="flex items-center gap-[20px]">
                                <Image src={"/images/profile1.svg"} alt={"image"} width={"56"} height={"56"} className="rounded-[50%]"/>
                                <span>
                                    <h3 className="text-[16px] font-semibold">James Nduku</h3>
                                    <p className="text-[16px]">Software Developer</p>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="border border-black p-[32px] w-[362px] flex flex-col gap-[32px]">
                        <ul className="flex gap-2">
                            <li><Image src={"/images/black-star.svg"} alt={"image"} width={"20"} height={"18"}/></li>
                            <li><Image src={"/images/black-star.svg"} alt={"image"} width={"20"} height={"18"}/></li>
                            <li><Image src={"/images/black-star.svg"} alt={"image"} width={"20"} height={"18"}/></li>
                            <li><Image src={"/images/black-star.svg"} alt={"image"} width={"20"} height={"18"}/></li>
                            <li><Image src={"/images/black-star.svg"} alt={"image"} width={"20"} height={"18"}/></li>
                        </ul>
                        <div className="w-[298px] flex flex-col gap-[24px]">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                            <span className="flex items-center gap-[20px]">
                                <Image src={"/images/profile6.svg"} alt={"image"} width={"56"} height={"56"} className="rounded-[50%]"/>
                                <span>
                                    <h3 className="text-[16px] font-semibold">James Nduku</h3>
                                    <p className="text-[16px]">Software Developer</p>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between gap-[32px] w-[1152px]">
                    <div className="flex items-center">
                        <Image src={"/images/slider-dots.svg"} alt={"image"} width={"72"} height={"8"}/>
                    </div>
                    <div className="flex gap-[15px]">
                        <Image src={"/images/btn-left-arrow.svg"} alt={"image"} width={"48"} height={"48"} className="hover:cursor-pointer"/>
                        <Image src={"/images/btn-right-arrow.svg"} alt={"image"} width={"48"} height={"48"} className="hover:cursor-pointer"/>
                    </div>
                </div>
            </div>
        </section>

        <section className="hidden w-[1280px] bg-[#F7F7F7] flex flex-col items-center justify-center gap-[64px] py-[64px] max-md:block max-md:w-full max-md:max-w-3xl max-md:bg-white max-md:px-6">
            <div className="w-[1152px] flex flex-col gap-[16px] max-md:w-full max-md:max-w-3xl max-md:items-center">
                <h1 className="text-[48px] font-bold">What Our Student Say</h1>
                <p className="text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex flex-col gap-[48px] max-md:w-full max-md:max-w-3xl  max-md:mt-8">
                <div className="flex gap-[32px] w-[1152px] max-md:w-full max-md:max-w-3xl">
                    <div className="border border-black p-[32px] w-[362px] flex flex-col gap-[32px] max-md:w-full max-md:max-w-3xl">
                        <ul className="flex gap-2">
                            <li><Image src={"/images/black-star.svg"} alt={"image"} width={"20"} height={"18"}/></li>
                            <li><Image src={"/images/black-star.svg"} alt={"image"} width={"20"} height={"18"}/></li>
                            <li><Image src={"/images/black-star.svg"} alt={"image"} width={"20"} height={"18"}/></li>
                            <li><Image src={"/images/black-star.svg"} alt={"image"} width={"20"} height={"18"}/></li>
                            <li><Image src={"/images/black-star.svg"} alt={"image"} width={"20"} height={"18"}/></li>
                        </ul>
                        <div className="w-[298px] flex flex-col gap-[24px] max-md:w-full max-md:max-w-3xl">
                            <p className="max-md:w-[400px]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                            <span className="flex items-center gap-[20px]">
                                <Image src={"/images/profile3.svg"} alt={"image"} width={"56"} height={"56"} className="rounded-[50%]"/>
                                <span>
                                    <h3 className="text-[16px] font-semibold">James Nduku</h3>
                                    <p className="text-[16px]">Software Developer</p>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between gap-[32px] w-[1152px] max-md:w-full max-md:max-w-3xl">
                    <div className="flex items-center">
                        <Image src={"/images/slider-dots.svg"} alt={"image"} width={"72"} height={"8"}/>
                    </div>
                    <div className="flex gap-[15px]">
                        <Image src={"/images/btn-left-arrow.svg"} alt={"image"} width={"48"} height={"48"} className="hover:cursor-pointer"/>
                        <Image src={"/images/btn-right-arrow.svg"} alt={"image"} width={"48"} height={"48"} className="hover:cursor-pointer"/>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>
    )
}
export default mainPage;