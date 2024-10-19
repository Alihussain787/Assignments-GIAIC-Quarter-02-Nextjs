import Link from "next/link";
let mainPage = () => {
  return(
    <div>
      <nav>
        <ul>
          <li><Link href="./home">Home</Link></li>
          <li><Link href="./about">About</Link></li>
          <li><Link href="./contact">Contact</Link></li>
          <li><Link href="./services">Services</Link></li>
          <li><Link href="./services/websites">Webites</Link></li>
        </ul>
      </nav>
    </div>
  )
}
export default mainPage;