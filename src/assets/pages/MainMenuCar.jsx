import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import "../style/mainStyle.scss";
import { useChangeMenu } from "../components/useChangeMenu";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsList, BsXLg } from "react-icons/bs";
import { useAxios } from "../components/useAxios";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { useState } from "react";
SwiperCore.use([Autoplay, Navigation]);
import MainMenuCarSub from "./MainMenuCarSub";

const MainMenuCar = () => {
  const { isplaymenu, changemenu, onclass, onclassevent } = useChangeMenu();
  const { data } = useAxios(
    "https://gist.githubusercontent.com/jeonseoungil/b463608c80f4a335fee2d36bdefac332/raw/c020a47e6bb0fc47795a90c73aee822f45b47f79/data.json"
  );
  const [subbg, setSubbg] = useState(false);

  const onSubon = () => {
    setSubbg(!subbg);
  };
  const xicons = () => {
    setSubbg(false);
  };
  console.log(onclass);
  return (
    <>
      <div className={isplaymenu || subbg ? "background" : ""}></div>

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
                <i onClick={changemenu}>
                  <BsXLg />
                </i>
              </div>
            </div>
          </div>
        </header>
        <div className="car">
          <h3>한정수량</h3>

          <ul className="carlist">
            {data.map(
              (item) =>
                item.car &&
                item.car.map((litem) => (
                  <li key={litem.carID}>
                    <img src={litem.carimg} alt="" />
                    <h4>{litem.title}</h4>
                    <strong>
                      <p> 판매가 : </p> {litem.price}
                    </strong>
                    <strong>
                      <p> 옵션 설명 : </p> {litem.option}
                    </strong>
                    <em>{litem.sale}</em>
                    <button onClick={onSubon}>간편 견적 신청</button>
                  </li>
                ))
            )}
          </ul>
        </div>
        {subbg && <MainMenuCarSub xicons={xicons} />}
        <Footer />
      </div>
    </>
  );
};

export default MainMenuCar;
