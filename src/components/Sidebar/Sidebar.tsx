import Menu from "./Menu";
import UserAction from "./UserAction";
import UserProfile from "./UserProfile";
import "./Sidebar.css";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="col-xl-2 sidebar">
      <UserProfile />
      <Menu />
      <UserAction />
    </div>
  );
};

export default Sidebar;
