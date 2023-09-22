/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/about.module.css";

function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>About Our Organization</h1>
          <p>
            Space research is scientific study carried out in outer space, and
            by studying outer space. From the use of space technology to the
            observable universe, space research is a wide research field. Earth
            science, materials science, biology, medicine, and physics all apply
            to the space research environment.The term includes scientific
            payloads at any altitude from deep space to low Earth orbit,
            extended to include sounding rocket research in the upper
            atmosphere, and high-altitude balloons.
          </p>
          <button className={styles.btn}>ReadMore</button>
        </div>
        <div className={styles.imgContent}>
          <img
            src="./about-img.jpg"
            alt="about-us"
            width="500px"
            className={styles.img}
          />
        </div>
      </div>
    </>
  );
}

export default About;
