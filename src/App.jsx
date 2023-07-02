import React from "react";
import { HashRouter  as Router,  Routes,  Route, Link } from "react-router-dom";
import MainBanner from "./assets/pages/MainBanner"
import GlobalStyle from "./assets/style/Global";
import MainMenuInfo from "./assets/pages/MainMenuInfo";
import MainMenuNoticeList from "./assets/pages/MainMenuNoticeList";
import MainMenuNoticItem from "./assets/pages/MainMenuNoticItem";
import MainMenuCar from "./assets/pages/MainMenuCar";
import Footerconditions from "./assets/pages/Footerconditions";
import FooterTerms from "./assets/pages/FooterTerms";
import "swiper/css";


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<MainBanner />} />
          <Route path="/info" element={<MainMenuInfo />} />
          <Route path="/Car" element={<MainMenuCar />} />
          <Route path="/noticeList" element={<MainMenuNoticeList />} />
          <Route
            path="/noticeList/:noticeDetail"
            element={<MainMenuNoticItem />}
          />
          <Route path="/privacy" element={<Footerconditions />} />
          <Route path="/terms" element={<FooterTerms />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
