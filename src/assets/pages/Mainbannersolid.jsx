import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../style/mainStyle.scss";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Navigation, Pagination,Autoplay } from "swiper";

const Mainbannersolid = () => {
  return (
    <div className="mainsolid">
      <Swiper
    spaceBetween={0}
    slidesPerView={1}  
      effect={"fade"}
    loop="true"
    pagination={{
      clickable: true,
    }}
    autoplay={{
      delay: 2500,
    }}

        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
      >
        <SwiperSlide>
          <img src="./images/gnb_slider_1.jpg" alt="탐라는 전기차 슬라이드1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/gnb_slider_2.jpg" alt="탐라는 전기차 슬라이드2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/gnb_slider_3.jpg" alt="탐라는 전기차 슬라이드3" />
        </SwiperSlide>
      </Swiper>

      <div className="textbox2">
        <h2>탐라는 전기차</h2>
        <p>
          전기차와 함께 제주 여행을 준비하는 당신에게
          <br /> 필요한 모든 정보와 꿀팁!
        </p>
      </div>
    </div>
  );
};

export default Mainbannersolid;
