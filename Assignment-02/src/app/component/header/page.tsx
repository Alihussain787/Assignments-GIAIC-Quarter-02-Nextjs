import style from "./header.module.css";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";

const headerPage = () => {
    return(
        <header className={style.header_bar}>
            <nav className={style.nav_bar}>
                <div className={style.logo}><Link href="/">IT-ExP</Link></div>
                <div className={style.menu}>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className={style.search}><IoSearch size="30px"/></div>
            </nav>
        </header> 
    )
}
export default headerPage;
