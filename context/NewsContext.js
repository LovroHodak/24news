import React, { useState, createContext } from "react";
import {dataMain} from '../data/data'

export const NewsContext = createContext();

export const NewsProvider = (props) => {
  const [news, setNews] = useState(dataMain);

  return (
    <NewsContext.Provider value={[news, setNews]}>
      {props.children}
    </NewsContext.Provider>
  );
};
