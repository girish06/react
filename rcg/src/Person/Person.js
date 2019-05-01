import React from 'react';
import './Person.css';
//import Radium from 'radium';

const person = (props) => {
  // const style = {
  //    '@media (min-width: 500px)':{
  //      width: '500px'
  //    }
  // };
  return (
  <div className ="Person">
   <p onClick={props.click}>my custom component name is {props.name} and my age is {props.age}</p>
   <p>{props.children}</p>
   <input type = "text" onChange={props.onchangeName} value={props.name}/>
   </div>
  )
};

export default person;
