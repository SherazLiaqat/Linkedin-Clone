import React from 'react'
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import Inputoption from './Inputoption';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
function Feed() {
    return (
        <div className="feed">
            <div className="feed-container">
                <div className="feed-input">
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button type="submit">Send</button>
                    </form>
                     </div>
                     <div className="feed-inputoptions">
                     
                         <Inputoption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                         <Inputoption Icon={YouTubeIcon} title="Video" color="#7FC15E"/>
                         <Inputoption Icon={EventNoteIcon} title="Event" color="#E7A33E"/>
                         <Inputoption Icon={CalendarViewDayIcon} title="Write Article" color="#FC9295"/>
                     
                     </div>
            </div>
            <Post/>
        </div>
    )
}

export default Feed
