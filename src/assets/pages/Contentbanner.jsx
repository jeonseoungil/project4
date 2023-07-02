import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";


const Contextbanner = ({
  changeinputs,
  isplayinput,
  selected,
  lichange,
  onchange,
  onSubmit,
  text,
}) => {
  return (
    <div className="bannertext">
      <div className="inner">
        <h4>전기차 이용법부터 알찬 꿀팁까지 모두 알려드려요!</h4>
        <ul>
          <li
            className={selected === 0 ? "on" : ""}
            onClick={() => lichange(0)}
          >
            인기 컨텐츠
          </li>
          <li
            className={selected === 1 ? "on" : ""}
            onClick={() => lichange(1)}
          >
             전기차 소개
          </li>
          <li
            className={selected === 2 ? "on" : ""}
            onClick={() => lichange(2)}
          >
            슬기로운 전기차 여행
          </li>
          <li
            className={selected === 3 ? "on" : ""}
            onClick={() => lichange(3)}
          >
            충전 및 문제 대처법
          </li>
          <li
            className={selected === 4 ? "on" : ""}
            onClick={() => lichange(4)}
          >
            FAQ
          </li>
          <li
            className={selected === 5 ? "on" : ""}
            onClick={() => lichange(5)}
          >
            <Link to={"/info"}> 제주 전기차 소개 </Link>
          </li>
          <li
            className={selected === 6 ? "on" : ""}
            onClick={() => lichange(6)}
          >
             <Link to={"/noticeList"}> 제주 전기차 뉴스 </Link>
          </li>
          <li>
            <button onClick={changeinputs}>
              <i>
                <BsSearch />
              </i>
              검색
            </button>
          </li>
        </ul>
        <form
          className={`bouttonarea ${isplayinput ? "on" : ""}`}
          onSubmit={onSubmit}
        >
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            value={text}
            name="text"
            onChange={onchange}
          />
          <button type="submit">
            <i>
              {" "}
              <BsSearch />{" "}
            </i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contextbanner;
