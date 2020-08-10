import React from 'react'
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt='alt'
                    src=""
                />

                <h3> Username</h3>
            </div>       
    
            {/* header -> avatar */}
            <img className="post__image" src="https://i.pinimg.com/564x/f9/f0/7a/f9f07a203874e68dd521ff8f8b12d0b7.jpg" alt="" />
            {/* image */}

            <h4 className="post__text"> really long caption really long caption really long caption really long caption really long caption really long caption really long caption really long caption really long caption really long caption really long caption </h4>
            {/* username + caption*/}
        </div>
    )
}

export default Post
