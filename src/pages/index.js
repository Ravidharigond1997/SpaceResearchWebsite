import Image from "next/image";
import styles from "../styles/page.module.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

export default function Home() {
  return (
    <>
      <section className={styles.main}>
        <h1>World Space Research Organization</h1>
        <div className={styles.mainContent}>
          <div className={styles.container}>
            <Image
              src="/Earth.png"
              alt="allPlanate"
              width={250}
              height={250}
              className={styles.earth}
            />
            <h2>
              <b>Welcome To Space Research</b>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              esse, amet incidunt fugit iure debitis dolorem soluta adipisci,
              quo architecto consequuntur vitae aperiam. Omnis porro
              necessitatibus totam, aperiam reprehenderit libero.
            </p>
            <button className={styles.btn}>ExploreMore</button>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.heading}>
          <h1>About Our Scientists</h1>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className={styles.mySwiper}
        >
          <SwiperSlide className={styles.swiperslide}>
            <div className={styles.card}>
              <img src="./CEO.jpg" alt="Avatar" />
              <div className={styles.content}>
                <h2>
                  <b>Dr. K Sivan</b>
                </h2>
                <p>Chairman of Space Research</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslide}>
            <div className={styles.card}>
              <img src="./voiceChairmen.jpg" alt="Avatar" />
              <div className={styles.content}>
                <h2>
                  <b>S Somanath</b>
                </h2>
                <p>New Space Research Chief</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslide}>
            <div className={styles.card}>
              <img src="./founder.jpg" alt="Avatar" />
              <div className={styles.content}>
                <h2>
                  <b>APJ Abdul khalam</b>
                </h2>
                <p>Founder of Space Research Organization</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslide}>
            <div className={styles.card}>
              <img src="./chairmen.jpg" alt="Avatar" />
              <div className={styles.content}>
                <h2>
                  <b>Nambi Narayan</b>
                </h2>
                <p>Ex-scientist of Space Research</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslide}>
            <div className={styles.card}>
              <img src="./KalpanaK.jpg" alt="Avatar" />
              <div className={styles.content}>
                <h2>
                  <b>Kalpana K</b>
                </h2>
                <p>Senior scientist of Space Research</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslide}>
            <div className={styles.card}>
              <img src="./remaining.jpg" alt="Avatar" />
              <div className={styles.content}>
                <h2>
                  <b>Team Scientist</b>
                </h2>
                <p>Space Research scientist team</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
