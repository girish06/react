import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 state = {
   personData: [
     { name: "girish", age: 10},
     { name: "giri",  age: 12}
   ]
 }

 clickSwitchHandler = (name) => {
   console.log('successfully clicked');
   this.setState( {
     personData: [
       { name: name, age: 20},
       { name: "giri",  age: 12}
     ]
   })
 }

 onchangeNameHandler = (event) => {
   this.setState( {
   personData: [
     { name: "giri",  age: 12},
     { name: event.target.value, age: 20},
   ]
 })
 }

  render() {
  const btnstyle = {
    backgroundColor: 'grey',
    font: 'inherit',
    padding: '8px',
    cursor: 'pointer',
    border: '1px solid #eee',
    width: '80px'
  };

    return (
      <div className="App">
           <h1>Welcom to react Learning</h1>
           <h2>Accessing the props outside the component</h2>
           <Person name="props" age="10">Hello</Person>
           <Person name="props1" age ="12">Learn react</Person>
           <h2>Accessing the state value inside the Component</h2>

           <Person
              name = {this.state.personData[0].name}
              age = {this.state.personData[0].age} />
           <Person
              name = {this.state.personData[1].name}
              age = {this.state.personData[1].age}
              click={this.clickSwitchHandler.bind(this,'Girish learning react')}
              onchangeName = {this.onchangeNameHandler} />
              <button style={btnstyle} onClick={this.clickSwitchHandler.bind(this,'Girish react')}>click...!</button>
      </div>
    );
    // return React.createElement('div','null','h1','welcome to react learning')
    //return React.createElement('div',{className: 'App'},React.createElement('h1','null','welcome to react learning'));
  }
}

export default App;
