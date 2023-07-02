import React from "react";
import Contentbanner from "./Contentbanner";
import ContentUl from "./ContentUl";

const MainContent = ({
  filterdata,
  changeinputs,
  isplayinput,
  selected,
  lichange,
  onchange,
  onSubmit,
  text,
  onopen,
  popup,
  visibleItems,
  showButton,
  more,
}) => {
  return (
    <div className="contentbg">
      <Contentbanner
        changeinputs={changeinputs}
        isplayinput={isplayinput}
        selected={selected}
        lichange={lichange}
        onchange={onchange}
        onSubmit={onSubmit}
        text={text}
      />
      <ContentUl
        filterdata={filterdata}
        onopen={onopen}
        popup={popup}
        showButton={showButton}
        visibleItems={visibleItems}
        more={more}
      />
    </div>
  );
};

export default MainContent;
