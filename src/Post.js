import React from 'react'
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import Inputoption from './Inputoption';
function Post() {
    return (
        <div className="post">
            <div className="post-header">
            <Avatar />
            <div className="post-info">
                <h2>Sheraz Ahmad</h2>
                <p>description</p>
            </div>
            </div>
            <div className="post-body">
                <p>message goes here</p>
            </div>
            <div className="post-button">
                <Inputoption Icon={ThumbUpAltIcon} title='Like' color='grey'/>
                <Inputoption Icon={CommentIcon} title='Comment' color='grey'/>
                <Inputoption Icon={ShareIcon} title='Share' color='grey'/>
                <Inputoption Icon={SendIcon} title='Send' color='grey'/>
            </div>
        </div>
    )
}

export default Post
