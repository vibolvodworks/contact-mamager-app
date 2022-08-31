import "./UserAction.css";
import React from "react";

const UserAction: React.FC = () => {
  return (
    <div className="user-action">
      <div className="action">
        <i className="bi bi-gear"></i>
        <span>Settings</span>
      </div>
      <div className="action">
        <i className="bi bi-box-arrow-right"></i>
        <span>Sign out</span>
      </div>
    </div>
  );
};

export default UserAction;
