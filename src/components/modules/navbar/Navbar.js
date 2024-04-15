import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
   return (
      <>
         <nav className={styles.navbar}>
            <main>
               <div>
                  <Link href="/">
                     <Image src="/images/logo.png" width={171} height={53} />
                  </Link>
               </div>
               <ul className={styles.links}>
                  <li>
                     <Link href="/"> صفحه اصلی</Link>
                  </li>
                  <li>
                     <Link href="/category">فروشگاه</Link>
                  </li>
                  <li>
                     <Link href="/blogs">وبلاگ</Link>
                  </li>
                  <li>
                     <Link href="/contact-us">تماس با ما</Link>
                  </li>
                  <li>
                     <Link href="/about-us">درباره ما </Link>
                  </li>
                  <li>
                     <Link href="/rules">قوانین </Link>
                  </li>
               </ul>
               <div></div>
            </main>
         </nav>
      </>
   );
};

export default Navbar;
