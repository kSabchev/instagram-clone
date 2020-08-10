import React from 'react'
import './Post.css';

function Post() {
    return (
        <div className="post">
            
            <h3>post header</h3>
            {/* header -> avatar */}
            <img className="post__image" src="https://i.pinimg.com/564x/f9/f0/7a/f9f07a203874e68dd521ff8f8b12d0b7.jpg" alt="" />
            {/* image */}

            <h4 className="post__text"> really long caption </h4>
            {/* username + caption*/}
        </div>
    )
}

export default Post
