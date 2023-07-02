import React, { useState } from "react";
import "../style/mainStyle.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { BsList, BsXLg } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useChangeMenu } from "../components/useChangeMenu";

import SwiperCore, { Autoplay, Navigation } from "swiper";
SwiperCore.use([Autoplay, Navigation]);

const MainMenu = () => {
  //https://www.lotte-autolease.com/estimate/quantity 서브페이지 참고
  const { isplaymenu, changemenu, onclass, onclassevent } = useChangeMenu();
  return (
    <>
          <div className={isplaymenu ? "background" : ""}></div>

      <header className="header">
        <div className="inner">
          <h1>
            <Link to="/">
              <img
                src="./images/logo_2.png"
                alt="탐라는 전기차"
                onClick={() => onclassevent(0)}
              />
            </Link>
            <p>
              <i onClick={changemenu}>
                <BsList />
              </i>
            </p>
            
          </h1>
          <div className={`Menu ${isplaymenu ? "on" : ""}`}>
            <div className="imagesbox">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 5000,
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide className="swiper">
                  <img
                    src="./images/gnb_slider_1.jpg"
                    alt="탐라는 전기차 슬라이드1"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper">
                  <img
                    src="./images/gnb_slider_2.jpg"
                    alt="탐라는 전기차 슬라이드2"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper">
                  <img
                    src="./images/gnb_slider_3.jpg"
                    alt="탐라는 전기차 슬라이드3"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="textbox1">
              <ul>
                <li
                  className={onclass === 0 || onclass === null ? "on" : ""}
                  onClick={() => onclassevent(0)}
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  className={onclass === 1 ? "on" : ""}
                  onClick={() => onclassevent(1)}
                >
                  <Link to={`/info`}>탐라는 전기차</Link>
                </li>
                <li
                  className={onclass === 2 ? "on" : ""}
                  onClick={() => onclassevent(2)}
                >
                  <Link to={`/Car`}>탐라는 전기차 소개</Link>
                </li>
                <li
                  className={onclass === 3 ? "on" : ""}
                  onClick={() => onclassevent(3)}
                >
                  <Link to={`/noticeList`}>JEJU 전기차 관련 소식</Link>
                </li>
              </ul>
              <i onClick={changemenu}>
                <BsXLg />
              </i>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainMenu;
