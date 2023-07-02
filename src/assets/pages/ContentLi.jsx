import React from "react";

const ContentLi = ({ item, onopen }) => {
  return (
    <li onClick={() => onopen(item.data_id)}>
      <img src={item.img} alt={item.title} />
    </li>
  );
};

export default ContentLi;
