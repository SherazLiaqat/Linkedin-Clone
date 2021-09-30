import React from 'react'
import './Header.css';
import icon from '../src/images/linkedin.png'

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Headeroption from './Headeroption';
const Header = () => {
    return (
        <div className='header'>
            
            <div className='header-left'>
<img src={icon} alt='icon'/>
<div className='header-search'>
<SearchIcon/>
<input type="text"/>
</div>
            </div>
            <div  className='header-right'>
               
<Headeroption Icon={HomeIcon} title="Home"/>
<Headeroption Icon={SupervisorAccountIcon} title="my network"/>
<Headeroption Icon={WorkIcon } title="Jobs"/>
<Headeroption Icon={ChatIcon } title="Messaging"/>
<Headeroption Icon={NotificationsIcon} title="Notification"/>
<Headeroption avatar={"/static/images/avatar/1.jpg" } />
            </div>
        </div>
    )
}

export default Header
