import React from 'react';

const UserIn = (props) => {
  const inlineStlye = {
    backgroundColor: 'grey',
  };

  return (
    <input type ="text"
     style = {inlineStlye}
    onChange = {props.unamechange} value = {props.currentuname} />
  )
};

export default UserIn;
