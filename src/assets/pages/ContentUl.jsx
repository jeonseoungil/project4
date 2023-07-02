import React, { useState, useEffect } from "react";
import ContentLi from "./ContentLi";

const ContentUl = ({
  filterdata,
  onopen,
  popup,
  visibleItems,
  showButton,
  more,
}) => {
  return (
    <>
      <div className={popup ? "background" : ""}></div>
      <div className="inner">
        <ul className="contentbox">
          {filterdata.slice(0, visibleItems).map((item) => (
            <ContentLi key={item.data_id} item={item} onopen={onopen} />
          ))}
        </ul>
        {visibleItems < filterdata.length && showButton && (
         <div className="more"> <button onClick={more} className="morebutton">더 보기</button></div>
        )}
      </div>
    </>
  );
};

export default ContentUl;
