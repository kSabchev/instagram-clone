import React, { useState } from 'react';
import './App.css';
import './Post.js';
import Post from './Post.js';

function App() {

  
  const [posts, setPosts] = useState([
    {
      username:"ksabchev",
      caption:"caption",
      imageUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg",
    },
    {
      username:"user1",
      caption:"caption1", 
      imageUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg",
    },
    {
      username:"user2",
      caption:"caption2",
      imageUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg"
    }
  ]);

  return (
    <div className="App">
      
      <div className="app__header">
        <img 
          className="app__headerImage"
          src="https://i.pinimg.com/564x/f9/f0/7a/f9f07a203874e68dd521ff8f8b12d0b7.jpg"
        />  
      </div>


      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
      
      {/* <Post />
      <Post /> */}
      {/* Header */}
      {/* Posts */}
      {/* Posts */}
      
    </div>
  );
}

export default App;
