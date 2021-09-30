import React from 'react'
import './Inputoption.css';
const Inputoption = ({Icon,title,color}) => {
    return (
        <div className="input-option">
            <Icon style={{color:color}}/>
            <h4>{title}</h4>
        </div>
    )
}

export default Inputoption
