import React from 'react';
import './App.css';
import './Post.js';
import Post from './Post.js';

function App() {
  return (
    <div className="App">
      <h1>
       Lets build instagram
      </h1>
      <div className="app__header">
        <img 
          className="app__headerImage"
          src="https://i.pinimg.com/564x/f9/f0/7a/f9f07a203874e68dd521ff8f8b12d0b7.jpg"
        />  
      </div>

      <Post />
      {/* Header */}
      {/* Posts */}
      {/* Posts */}
      
    </div>
  );
}

export default App;
