import React from "react";
import {HashRouter} from "react-router-dom";
import Header from "./Header";
import Routes from "./Routes";

const Pages = () => {
  return (
    <div>
      <HashRouter>
        <Header/>
        <Routes/>
      </HashRouter>
    </div>
  );
}

export default Pages;