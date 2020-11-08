import React, { useState, useEffect } from "react";
import "./App.css";
import "./Post.js";
import Post from "./Post.js";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()));
    });
  }, []);

  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://i.pinimg.com/564x/f9/f0/7a/f9f07a203874e68dd521ff8f8b12d0b7.jpg"
        />
      </div>
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
      {/* <Post />
      <Post /> */}
      {/* Header */}
      {/* Posts */}
      {/* Posts */}
    </div>
  );
}

export default App;
