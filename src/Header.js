import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SupervisorAccountRoundedIcon from "@material-ui/icons/SupervisorAccountRounded";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import SmsRoundedIcon from "@material-ui/icons/SmsRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        {" "}
        <HeaderOption Icon={HomeRoundedIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountRoundedIcon} title="My network" />
        <HeaderOption Icon={WorkRoundedIcon} title="Jobs" />
        <HeaderOption Icon={SmsRoundedIcon} title="Messges" />
        <HeaderOption Icon={NotificationsRoundedIcon} title="Notifications" />
      </div>
    </div>
  );
}

export default Header;
