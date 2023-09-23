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
      {/* <div className={styles.container}>
        {achivements.map((data, key) => {
          return (
            <div key={key}>
              <div className={styles.card}>
                <div className={styles.imageContainer}>
                  <img src={data.image} alt="Avatar" width="100%" />
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
      </div> */}
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img
              src="https://cdnuploads.aa.com.tr/uploads/Contents/2018/08/12/thumbs_b_c_375cae4f85367b0c22a9c90bfd127599.jpg?v=121905"
              alt="Avatar"
              width="100%"
            />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              <h3 className={styles.h3}>
                <b>Mission Sun</b>
              </h3>
              <div className={styles.body}>
                <p className={styles.p}>
                  This sun mession our first mission in our origanization.Its
                  take to 13 moonth to complated in our organization
                </p>
              </div>
            </div>
          </div>
          <div className={styles.btn}>
            <button>
              <a>View more</a>
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img
              src="https://static.scientificamerican.com/sciam/cache/file/1CD9AF72-0B9B-4312-BE7FF8C7F3E3C3AA_source.jpg"
              alt="Avatar"
              width="100%"
            />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              <h3 className={styles.h3}>
                <b>Mission Mars</b>
              </h3>
              <div className={styles.body}>
                <p className={styles.p}>
                  This mars mession our second mission in our origanization.Its
                  take to 12 moonth to complated in our organization
                </p>
              </div>
            </div>
          </div>
          <div className={styles.btn}>
            <button>
              <a>View more</a>
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img
              src="https://i.gadgets360cdn.com/large/ch3_rover_isro_1692852195660.jpg"
              alt="Avatar"
              width="100%"
            />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              <h3 className={styles.h3}>
                <b>Mission moon</b>
              </h3>
              <div className={styles.body}>
                <p className={styles.p}>
                  This moon mession our third mission in our origanization.Its
                  take to 13 moonth to complated in our organization
                </p>
              </div>
            </div>
          </div>
          <div className={styles.btn}>
            <button>
              <a>View more</a>
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU6HP69h1oUU5O7vWcv5UVc500PIeovID6TGWAQM-AqI9KOosPF7N3Ks4fH-FeaK-WFns&usqp=CAU"
              alt="Avatar"
              width="100%"
            />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              <h3 className={styles.h3}>
                <b>Mission Earth</b>
              </h3>
              <div className={styles.body}>
                <p className={styles.p}>
                  This moon mession our third mission in our origanization.Its
                  take to 6 moonth to complated in our organization
                </p>
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
    </>
  );
}

export default Achivements;
