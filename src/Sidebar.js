import React from "react";
import "./Sidebar.css";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
export const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt=""
        />
        <AccountCircleRoundedIcon />
        <h2>Elias</h2>
        <h4>correo@hotmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>quien te ha visto</p>
          <p className="sidebar_statNumber">2</p>
        </div>
        <div className="sidebar__stat">
          <p>quien te ha visto</p>
          <p className="sidebar_statNumber">20</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>recent</p>
        {recentItem("reactjs")}
        {recentItem("programing")}
        {recentItem("javascript")}
        {recentItem("devops")}
      </div>
    </div>
  );
};
