import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="inner">
        <img src="./images/logo_2.png" alt="" />
        <ul>
          <li>
            <Link to={`/`}>탐라는 전기차</Link>
          </li>
          <li>
            <Link to={`/Car`}>탐라는 전기차 소개</Link>
          </li>
          <li>
            <Link to={`/noticeList`}>JEJU 전기차 관련 소식</Link>
          </li>
          <li>
            <Link to={`/privacy`}> 이용약관</Link>
          </li>
          <li>
            <Link to={`/Terms`}> 개인정보처리방침</Link>
          </li>
        </ul>
        <p>COPYRIGHT @ ALL right RESERVED</p>
      </div>
    </div>
  );
};

export default Footer;
