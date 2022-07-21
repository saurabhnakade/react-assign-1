import React from 'react'
import './UserInput.css'

const UserInput=(props)=>{
    return(
        <input type="text" onChange={props.change} value={props.username} className="UserInput"/>
    )
}

export default UserInput