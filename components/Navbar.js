import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../src/styles/navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div>
          <Image
            src="/rocket.png"
            alt="logo"
            width={90}
            height={100}
            className={styles.logo}
          />
        </div>
        <div className={styles.navbardata}>
          <ul className={styles.navbarlist}>
            <Link href={"/"}>
              <li className={styles.list}>Home</li>
            </Link>
            <Link href={"/achivements"}>
              <li className={styles.list}>Achivements</li>
            </Link>
            <Link href={"/about"}>
              <li className={styles.list}>About</li>
            </Link>
            <Link href={"/contact"}>
              <li className={styles.list}>Contact</li>
            </Link>
          </ul>
        </div>
        <div className={styles.btn}>
          <button className={styles.btn1}>Moreabout</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
