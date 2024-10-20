import style from "./hero.module.css";
import Link from "next/link";
import Image from "./asset/header-img.png";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const heroPage = () => {
    return(
        <div className={style.main_box}>
            <section className={style.container}>
                <div className={style.content}>
                    <ul className={style.socials}>
                        <li><Link href="#"><FaFacebookF/></Link></li>
                        <li><Link href="#"><FaYoutube/></Link></li>
                        <li><Link href="#"><FaInstagram/></Link></li>
                        <li><Link href="#"><FaXTwitter/></Link></li>
                    </ul>
                    <p className={style.heading1}>IT solutions</p>
                    <h1 className={style.main_heading}>Providing The Best Services & IT <span className={style.main_heading_part}>Solutions</span></h1>
                    <p className={style.paragraph}>Our expert team is dedicated to deliver exceptional solutions tailored to your need. Let's bring your to life and create somthing extraordinary together.</p>
                    <div>
                        <button className={style.btn}>Start Now</button>
                    </div>
                </div>
                <div className={style.heroImage}>
                        <img src={Image.src} alt="" className={style.img}/>
                </div>
            </section>
        </div>
    )
}
export default heroPage;