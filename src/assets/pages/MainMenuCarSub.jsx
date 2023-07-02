import React from "react";
import { BsXLg } from "react-icons/bs";

const MainMenuCarSub = ({ xicons }) => {

  
  return (
    <div className="subpage">
      <h2>간편 견적 신청</h2>
      <div className="subcontent">
        <p>
          <strong>
            <b>*</b>구분
          </strong>
          <input type="radio" className="jobs" />
          <label>개인</label>
        </p>
        <p>
          <strong>
            <b>*</b>성명
          </strong>
          <input
            type="text"
            placeholder="이름을 입력하세요."
            className="name"
          />
        </p>
        <p>
          <strong>
            <b>*</b>연락처
          </strong>
          <input type="text" placeholder="010" className="call" />-
          <input type="text" className="call" />-
          <input type="text" className="call" />
        </p>

        <h4>
          연락처를 남겨주시면 상담원이 연락 드리고 친절하게 상담해 드리겠습니다.
        </h4>
      </div>
      <button>간편 견적 신청하기</button>
      <p className="xicons" onClick={xicons}>
        <BsXLg />
      </p>
    </div>
  );
};

export default MainMenuCarSub;
