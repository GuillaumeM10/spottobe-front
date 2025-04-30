import React from "react";
import fakeData from "../../fake_data.json";
import { useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState(fakeData);
  const tags = [
    "Data",
    "Conférences",
    "Entre amis",
    "Sport",
    "Concert",
    "Festivals",
  ];

  return (
    <AppContext.Provider value={{ posts, setPosts, posts, tags }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
