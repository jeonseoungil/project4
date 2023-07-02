import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Mainbannersolid from "./Mainbannersolid";
import MainContent from "./MainContent";
import Footer from "./Footer";
import MainMenu from "./MainMenu";
import "../style/mainStyle.scss";
import { useAxios } from "../components/useAxios";
import { useChangeMenu } from "../components/useChangeMenu";
import ContentSub from "./ContentSub";

// https://www.lotte-autolease.com/estimate/quantity MainMenuCar컨포넌트 참고
const Mainbanner = () => {
  const [isplayinput, setIsPlayInPut] = useState(false); //검색
  const [selected, setIsSelected] = useState(0); //li검색
  const [text, setText] = useState(""); // 검색
  const [popup, setPopUp] = useState(false); // 팝업
  const [popupdata, setPopUpData] = useState([]); // 팝업

  const { isplaymenu, onclassevent } = useChangeMenu();

  // 만약 베인배너로 이동하게되면 다시 onclass값을 0으로 초기화시킴
  useEffect(() => {
    onclassevent(0);
  }, []);

  const { data } = useAxios(
    "https://gist.githubusercontent.com/jeonseoungil/b463608c80f4a335fee2d36bdefac332/raw/c020a47e6bb0fc47795a90c73aee822f45b47f79/data.json"
  );
  const [filterdata, setFilterData] = useState([]); //;데이터 변환
  const [visibleItems, setVisibleItems] = useState(6);
  const [showButton, setShowButton] = useState(true);

  const more = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };
  useEffect(() => {
    if (data) {
      setFilterData(data);
    }
  }, [data]);

  const changeinputs = () => {
    setIsPlayInPut(!isplayinput);
  };
  const lichange = (id) => {
    setIsSelected(id);
    setVisibleItems(6);
    if (id === 0) {
      setFilterData(data);
    }
    if (id === 1) {
      setFilterData(data.filter((item) => item.inst));
    }
    if (id === 2) {
      setFilterData(data.filter((item) => item.inst2));
    }
    if (id === 3) {
      setFilterData(data.filter((item) => item.inst3));
    }
    if (id === 4) {
      setFilterData(data.filter((item) => item.inst4));
    }
    if (id === 5) {
    }
    if (id === 6) {
    }
  };

  const onchange = (e) => {
    const { value } = e.target;
    setText(value);
    setIsSelected(0);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const filter = data.filter((item) => item.tag.includes(text));
    setFilterData(filter);
    setText("");
  };
  // 검색 기능 넣기
  const onopen = (id) => {
    console.log(id);
    setPopUp(!popup);
    setPopUpData(data.find((item) => item.data_id === id));
  };
  const onclose = () => {
    setPopUp(!popup);
  };

  return (
    <>
      <div className={isplaymenu ? "background" : ""}></div>
      <div className="wrap">
        <MainMenu />
        <Mainbannersolid />
        <MainContent
          filterdata={filterdata}
          changeinputs={changeinputs}
          isplayinput={isplayinput}
          selected={selected}
          lichange={lichange}
          onchange={onchange}
          onSubmit={onSubmit}
          text={text}
          onopen={onopen}
          popup={popup}
          visibleItems={visibleItems}
          showButton={showButton}
          more={more}
        />

        {popup === true ? (
          <ContentSub popupdata={popupdata} onclose={onclose} />
        ) : (
          ""
        )}
        <Footer />
      </div>
    </>
  );
};

export default Mainbanner;
