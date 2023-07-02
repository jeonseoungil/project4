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
SwiperCore.use([Autoplay, Navigation]);

const MainMenuNoticItem = () => {
  const { isplaymenu, changemenu, onclass, onclassevent } = useChangeMenu();
  const { data, isLoading, error } = useAxios(
    "https://gist.githubusercontent.com/jeonseoungil/b463608c80f4a335fee2d36bdefac332/raw/c020a47e6bb0fc47795a90c73aee822f45b47f79/data.json"
  );
  const { noticeDetail } = useParams();
  const pages = [];
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
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  loop={true}
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
        <div className="noticeList2">
          <div className="contrainer2">
            <h3>JEJU 전기차 관련 소식</h3>
            <em>
              제주도의 전기차 관련 정보와 다양한 관광 소식을 확인해보세요.
            </em>
            {data &&
              data.map(
                (item) =>
                  item.table &&
                  item.table
                    .filter(
                      (tableItem) => tableItem.tableID === Number(noticeDetail)
                    )
                    .map((filteredItem) => (
                      <div key={filteredItem.tableID}>
                        <div className="noticeitem">
                          <h4>{filteredItem.title}</h4>
                          <strong>{filteredItem.days}</strong>
                        </div>
                        {filteredItem.img3 && filteredItem.img3.length > 1 ? (
                          <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper) => console.log(swiper)}
                            navigation={filteredItem.img3.length > 0}
                          >
                            {filteredItem.img3.map((img3, index) => (
                              <SwiperSlide key={index} className="swiper">
                                <img src={img3} alt={filteredItem.title} />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        ) : (
                          <img
                            src={filteredItem.img4}
                            alt={filteredItem.title}
                          />
                        )}
                        <p>{filteredItem.content1}</p>
                        <p>{filteredItem.content2}</p>
                        <p>{filteredItem.content3}</p>
                      </div>
                    ))
              )}

            <div className="button5">
              <button
                className={`button7 ${
                  Number(noticeDetail) <= 1 ? "disabled" : ""
                }`}
              >
                {" "}
                <Link
                  to={`/noticeList/${
                    Number(noticeDetail) <= 1 ? "" : Number(noticeDetail) - 1
                  }`}
                >
                  &lt; 이전글{" "}
                </Link>{" "}
              </button>
              <button className="button6">
                <Link to={"/noticeList"} style={{ color: "#fff" }}>
                  {" "}
                  목록가기
                </Link>
              </button>
              <button
                className={`button7 ${
                  Number(noticeDetail) >= 5 ? "disabled" : ""
                }`}
              >
                {" "}
                <Link
                  to={`/noticeList/${
                    Number(noticeDetail) >= 5 ? "" : Number(noticeDetail) + 1
                  }`}
                >
                  다음글 &gt;
                </Link>{" "}
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainMenuNoticItem;
