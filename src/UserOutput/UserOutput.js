import React from 'react'
import './UserOutput.css'

const UserOutput=(props)=>{
        return(
            <div className='UserOutput'>
                <p onClick={props.click}>Hello this is {props.username}</p>
                <p>Iam pursuing Btech in Walchand College of Engineering</p>
            </div>
        )
}

export default UserOutput