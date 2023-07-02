import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../style/mainStyle.scss";
import { useChangeMenu } from "../components/useChangeMenu";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsList, BsXLg } from "react-icons/bs";
import { useAxios } from "../components/useAxios";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Navigation } from "swiper";
SwiperCore.use([Autoplay, Navigation]);

const MainMenuInfo = () => {
  const { isplaymenu, changemenu, onclass, onclassevent } = useChangeMenu();

  return (
    <>
      <div className={isplaymenu ? "background" : ""}></div>

      <div className="wrap">
        <header className="header">
          <div className="inner">
            <h1 className="menuh1">
              <Link to="/">
                <img
                  src="./images/logo_1.png"
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
                    delay: 10000,
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
                  <ul>
                    <li
                      className={onclass === 0 ? "on" : ""}
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
                </ul>
                <i onClick={changemenu}>
                  <BsXLg />
                </i>
              </div>
            </div>
          </div>
        </header>
        <div className="infobg">
          <div className="info">
            <img src="./images/info_1.png" alt="" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainMenuInfo;
