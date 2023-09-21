import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/achivements.module.css";

function Achivements() {
  const [achivements, setAchivements] = useState([]);

  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    let data = await fetch("http://localhost:3000/api/getAchivementsData");
    let allAchivements = await data.json();
    allAchivements.map((data) => setAchivements(data));
  };

  return (
    <>
      <div className={styles.container}>
        {achivements.map((data, key) => {
          return (
            <div key={key}>
              <div className={styles.card}>
                <div className={styles.imageContainer}>
                  <img src={data.image} alt="Avatar" />
                </div>
                <div className={styles.content}>
                  <div className={styles.title}>
                    <h3 className={styles.h3}>
                      <b>{data.title}</b>
                    </h3>
                    <div className={styles.body}>
                      <p className={styles.p}>{data.content}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.btn}>
                  <button>
                    <a>View more</a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Achivements;
