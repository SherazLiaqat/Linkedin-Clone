import React from 'react'
import './Headeroption.css';
import { Avatar } from '@material-ui/core';
function Headeroption({avatar,Icon,title}) {
    return (
        <div className='headerOption'>
            {Icon &&<Icon className='headerOption-icon'/>}
            {avatar &&<Avatar className='headerOption-avatar'/>}
            <h3 className='headerOption-title'>{title}</h3>
        </div>
    )
}

export default Headeroption

