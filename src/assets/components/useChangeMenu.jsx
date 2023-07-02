import { useState, useEffect } from "react";

export const useChangeMenu = () => {
  const [isplaymenu, setIsPlayMenu] = useState(false);
  const [onclass, setOnClass] = useState(() => {
    const storedOnClass = JSON.parse(localStorage.getItem("onclass"));
    return storedOnClass || null;
  });

  const changemenu = () => {
    setIsPlayMenu(!isplaymenu);
  };

  const onclassevent = (id) => {
    setOnClass(id);
    localStorage.setItem("onclass", id.toString());
  };

  return { isplaymenu, changemenu, onclass, onclassevent };
};
