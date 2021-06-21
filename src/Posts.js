import React from "react";
import "./Posts.css";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import InputOption from "./InputOption";
import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";
import ShareRoundedIcon from "@material-ui/icons/ShareRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

const Posts = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__avatar">
          <AccountCircleRoundedIcon />
        </div>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpRoundedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatRoundedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareRoundedIcon} title="Share" color="gray" />
        <InputOption Icon={SendRoundedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
};

export default Posts;
