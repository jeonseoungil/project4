import React, { useState } from "react";
import { BsFillHeartbreakFill, BsShareFill, BsXLg } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination ,Navigation } from "swiper";

const ContentSub = ({ popupdata, onclose }) => {
  const [icons, setIcons] = useState(false);
  const changeicon = () => {
    setIcons(!icons);
  };
  return (
    <div className="popbox">
      <div className="popup">
        <div className="popimage">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Pagination,Navigation]} 
          >
            {popupdata.img2 ? (
              popupdata.img2.map((item) => (
                <SwiperSlide>
                  <img src={item} alt="" />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <iframe
                  width="720"
                  height="400"
                  src={`https://www.youtube.com/embed/${popupdata.youtube}`}
                  className="yotube"
                ></iframe>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
        <div className="popuptext">
          <span>{popupdata.text}</span>
          <h3>{popupdata.title}</h3>
          <p className="icons">
            <i className={icons ? "on" : ""} onClick={changeicon}>
              <BsFillHeartbreakFill />
            </i>
            <b> {icons ? popupdata.num + 1 : popupdata.num} </b>
          </p>
          <p className="tag">{popupdata.tag}</p>
          <hr />
          <div className="share">
            <div className="share1">
              {" "}
              <i>
                <BsShareFill />
              </i>
              <p>공유하기</p>
            </div>
            <div className="share2">
              <img src="./images/icon_facebook.png" alt="" />
              <img src="./images/icon_blog.png" alt="" />
              <img src="./images/icon_kakao.png" alt="" />
            </div>
          </div>
          <i className="close" onClick={onclose}>
            <BsXLg />
          </i>
        </div>
      </div>
    </div>
  );
};

export default ContentSub;
