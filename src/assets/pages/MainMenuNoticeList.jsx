import React, { useState, useEffect } from "react";
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

const MainMenuNoticeList = () => {
  const { isplaymenu, changemenu, onclass, onclassevent } = useChangeMenu();
  const { data, isLoading, error } = useAxios(
    "https://gist.githubusercontent.com/jeonseoungil/b463608c80f4a335fee2d36bdefac332/raw/c020a47e6bb0fc47795a90c73aee822f45b47f79/data.json"
  );
  const [pages, setPages] = useState(0);

  useEffect(() => {
    if (data && data[0] && data[0].table) {
      setPages(data[0].table.length);
    }
  }, [data]);

  const [postPerPage, setpostPerPage] = useState(6);
  const pageNumber = Math.ceil(pages / postPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const current = (pageNumber) => setCurrentPage(pageNumber);
  let pageNum = [];
  for (let i = 1; i <= pageNumber; i++) {
    pageNum.push(i);
  }
  const totalfirst = () => {
    setCurrentPage(1);
  };

  const totallast = () => {
    setCurrentPage(pageNumber);
  };

  const prev = () => {
    if (currentPage >= 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const next = () => {
    if (currentPage <= 1) {
      setCurrentPage(currentPage + 1);
    }
  };
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
        <div className="noticeList">
          <div className="contrainer">
            <h3>JEJU 전기차 관련 소식</h3>
            <p>제주도의 전기차 관련 정보와 다양한 관광 소식을 확인해보세요.</p>

            <table>
              <caption style={{ display: "none" }}>
                NO, 제목, 작성일, 조회수에 대한 내용
              </caption>
              <colgroup>
                <col style={{ width: "13%" }} />
                <col />
                <col style={{ width: "13%" }} />
                <col style={{ width: "13%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>NO</th>
                  <th>제목</th>
                  <th>작성일</th>
                  <th>조회 수</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map(
                    (item) =>
                      item.table &&
                      item.table.map((tableItem) => (
                        <tr key={tableItem.tableID}>
                          <td>{tableItem.tableID}</td>
                          <td>
                            <Link to={`/noticeList/${tableItem.tableID}`}>
                              {tableItem.title}
                            </Link>{" "}
                          </td>
                          <td>{tableItem.days}</td>
                          <td>{tableItem.view}</td>
                        </tr>
                      ))
                  )}
              </tbody>
            </table>
            <div className="pageing">
              <button onClick={totalfirst}>&lt;&lt;</button>
              <button onClick={prev}>&lt;</button>
              {pageNum.map((item) => (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item)}
                  className={currentPage === item ? "active" : ""}
                >
                  {item}
                </button>
              ))}
              <button onClick={next}>&gt;</button>
              <button onClick={totallast}>&gt;&gt;</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainMenuNoticeList;
