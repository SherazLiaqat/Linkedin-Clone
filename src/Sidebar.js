import React from 'react'
import './Sidebar.css';

import { Avatar } from '@material-ui/core';
function Sidebar() {
    const recentitem=(topic)=>(
<div className='sidebar-recentitem'>
    <span className="sidebar-hash">#</span>
    <p>{topic}</p>
</div>

    );
    return (
        <div className='sidebar'>
            <div className='sidebar-top'>
                <img src="https://source.unsplash.com/collection/190727/1600x900" alt='cover'/>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" className="sidebar-avatar"/>
           
            <h2>SHERAZ AHMAD</h2>
            <h4>sherazliaqat099@gmail.com</h4>
            
            </div>
            <div className="sidebar-stats">
                <div className="sidebar-stat">
<p>who viewed you </p>
<p className="sidebar-statnumber">128</p>
                </div>
                <div className="sidebar-stat">
<p>views on your post</p>
<p className="sidebar-statnumber">1228</p>
                </div>

            </div>
            <div className="sidebar-bottom">
                <p>Recent</p>
                {recentitem("React js")}
                {recentitem("Programming")}
                {recentitem("Developer")}
                {recentitem("Design")}
            </div>
        </div>
    )
}

export default Sidebar
