import React from 'react';
import './UserOutput.css'

const UserOut = (props) => {
  return (
     <div className = "udata">
       <p>hello its an react assignment</p>
       <p>welcome to the user: {props.uname}</p>
     </div>
    )
};

export default UserOut;
