import React from "react"
import style from "./footer.module.css";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { CiMobile2 } from "react-icons/ci";


const footerPage = () => {
    return(
        <footer className={style.footer_container}>
                <div className={style.content_box}>
                    <div className={style.sub_box}>
                        <h2 className={style.logo}>IT ExP</h2>
                        <p className={style.paragraph}>Our expert team is dedicated to deliver exceptional solutions tailored to your need. Let's bring your to life and create somthing extraordinary together.</p>
                        <div className={style.mail_box}>
                            <p className={style.p}>Subscribe to our news letter</p>
                            <input type="text" className={style.input_filed}/>
                            <button className={style.btn}>Subscribe</button>
                            <p className={style.p}>*we will not share your personal info</p>
                        </div>
                        <p className={style.owner}>© 2024 Created by: Ali Hussain</p>
                    </div>
                    <div className={style.useful_links}>
                    <div className={style.links_box}>
                        <h2 className={style.footer_heading}>useful links</h2>
                        <ul>
                            <li className={style.list}><FaArrowRightLong size="10px"color="skyblue"/> <Link href="#" className={style.link}>Google</Link></li>
                            <li className={style.list}><FaArrowRightLong size="10px"color="skyblue"/> <Link href="#" className={style.link}>GitHub</Link></li>
                            <li className={style.list}><FaArrowRightLong size="10px"color="skyblue"/> <Link href="#" className={style.link}>Vercel</Link></li>
                            <li className={style.list}><FaArrowRightLong size="10px"color="skyblue"/> <Link href="#" className={style.link}>Linkedin</Link></li>
                        </ul>
                    </div>
                    <div className={style.links_box}>
                    <h2 className={style.footer_heading}>Resources</h2>
                        <ul>
                            <li className={style.list}><FaArrowRightLong size="10px"color="skyblue"/> <Link href="#" className={style.link}>Support</Link></li>
                            <li className={style.list}><FaArrowRightLong size="10px"color="skyblue"/> <Link href="#" className={style.link}>Dashboard</Link></li>
                            <li className={style.list}><FaArrowRightLong size="10px"color="skyblue"/> <Link href="#" className={style.link}>Drivers</Link></li>
                            <li className={style.list}><FaArrowRightLong size="10px"color="skyblue"/> <Link href="#" className={style.link}>Projects</Link></li>
                        </ul>
                    </div>
                    <div className={style.links_box}>
                    <h2 className={style.footer_heading}>Contact Information</h2>
                        <ul className={style.ul_list}>
                            <li className={style.list}><TfiEmail size="30px" color="skyblue"/><span className={style.link}> alihussainsindhi787@gmail.com</span></li>
                            <li className={style.list}><CiLocationOn size="30px" color="skyblue"/><span className={style.link}>4 xyz st., abc, Karachi, Pakistan</span></li>
                            <li className={style.list}><CiMobile2 size="30px" color="skyblue"/><span className={style.link}>+923122963060</span></li>
                            <ul className={style.socials}>
                                <li><Link href="#"><span><FaFacebookF/></span></Link></li>
                                <li><Link href="#"><span><FaYoutube/></span></Link></li>
                                <li><Link href="#"><span><FaInstagram/></span></Link></li>
                                <li><Link href="#"><span><FaXTwitter/></span></Link></li>
                            </ul>
                        </ul>
                        <p className={style.owner}>Terms of Use | Privacy Policy.</p>
                    </div>
                    </div>
                </div>
        </footer>
    )
}
export default footerPage;
