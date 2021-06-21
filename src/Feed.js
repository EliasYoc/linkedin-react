import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";
import InputOption from "./InputOption";
import ImageRoundedIcon from "@material-ui/icons/ImageRounded";
import SubscriptionsRoundedIcon from "@material-ui/icons/SubscriptionsRounded";
import EventNoteRoundedIcon from "@material-ui/icons/EventNoteRounded";
import CalendarViewDayRoundedIcon from "@material-ui/icons/CalendarViewDayRounded";
import Posts from "./Posts";
import { db } from "./firebase";
import firebase from "firebase";
const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Elias",
      description: "esto es una prueba h",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateRoundedIcon />
          <form>
            <input
              value={input}
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost}>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageRoundedIcon} title="Photo" color="#70b5f9" />
          <InputOption
            Icon={SubscriptionsRoundedIcon}
            title="Video"
            color="#E7A33E"
          />
          <InputOption
            Icon={EventNoteRoundedIcon}
            title="Event"
            color="#C0CBCD"
          />
          <InputOption
            Icon={CalendarViewDayRoundedIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* POSTS */}
      {posts.map(({ id, data: { name, description, message } }) => (
        <Posts
          key={id}
          name={name}
          description={description}
          message={message}
        />
      ))}
      <Posts
        name="Elias"
        description="esto es una prueba"
        message="Esto está funcionando"
      />
    </div>
  );
};
export default Feed;
