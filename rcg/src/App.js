import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
           <h1>Welcom to react Learning</h1>
           <Person name="props" age="10" />
           <Person name="props1" age ="12"/>
      </div>
    );
    // return React.createElement('div','null','h1','welcome to react learning')
    //return React.createElement('div',{className: 'App'},React.createElement('h1','null','welcome to react learning'));
  }
}

export default App;
