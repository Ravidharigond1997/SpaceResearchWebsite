import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../src/styles/navbar.module.css";

function Navbar() {
  return (
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
      <div className={styles.navbarlist}>
        <ul className={styles.navbarlist}>
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/"}>
            <li>Achives</li>
          </Link>
          <Link href={"/"}>
            <li>About</li>
          </Link>
          <Link href={"/"}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className={styles.btn}>
        <button className={styles.btn1}>Moreabout</button>
      </div>
    </div>
  );
}

export default Navbar;
