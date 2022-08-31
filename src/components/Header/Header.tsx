import Search from "./Search";
import HeaderNav from "./HeaderNav";
import "./Header.css";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="header row">
      <Search />
      <HeaderNav />
    </div>
  );
};

export default Header;
