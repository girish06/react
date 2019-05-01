import React, { Component } from 'react';
import './App.css';
//import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {
 state = {
   personData: [
     { id: 'g1', name: "girish", age: 10},
     { id: 'g2', name: "giri",  age: 12}
   ],
   showPersons: false
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

 onchangeNameHandler = ( event, id ) => {
   // get the index of the array.
     const PersonsIndex = this.state.personData.findIndex(p => {
     return p.id === id;
   })

   // get the person.
   const person = {
     ...this.state.personData[PersonsIndex]
   }

   // aternative approach here
   //const person = Object.assign({},this.state.personData[PersonsIndex]);

   person.name = event.target.value;

   const persons = [...this.state.personData]
   persons[PersonsIndex] = person;

  this.setState({personData: persons})

 //   this.setState( {
 //   personData: [
 //     { name: "giri",  age: 12},
 //     { name: event.target.value, age: 20},
 //   ]
 // })
 }

 toggleperson = () => {
   const doesShow = this.state.showPersons;
   this.setState({showPersons: !doesShow});
 }


 deletePersonHandler = (personIndex) => {
    //const personData = this.state.personData.slice();
    const personData = [...this.state.personData];
    personData.splice(personIndex,1);
    this.setState({personData: personData});
 }


  render() {
  const btnstyle = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    padding: '8px',
    cursor: 'pointer',
    border: '1px solid #eee',
    width: '150px'
  };
  let persons = null;
  let person_dumy = null;

  if( this.state.showPersons ) {
    persons = (
       <div>
         <p><b>dynamic retirval data</b></p>
         {this.state.personData.map((person,index) =>{
             return <Person
             click ={this.deletePersonHandler.bind(this,index)}
             name={person.name}
             age={person.age}
             key={person.id}
             onchangeName={(event) => this.onchangeNameHandler(event,person.id)}
             />
         })}
       </div>
    );
    btnstyle.backgroundColor = 'red';
  }
  else {
   /*
    person_dumy = (
    <div>
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
    */
  }
     const classes = [];

     if( this.state.personData  <=2 ) {
       classes.push('red');
     }
     if (this.state.personData <=1) {
       classes.push('bold');
     }

     //let classes = ['red', 'bold'].join(' ');
    return (
      <div className="App">
           <h1>Welcom to react Learning</h1>
           <p>Accessing the props outside the component</p>
           <Person name="props" age="10">Hello</Person>
           <Person name="props1" age ="12">Learn react</Person>
           <h2 className = {classes.join(' ')}>Accessing the state value inside the Component</h2>
                <button style={btnstyle} onClick={this.toggleperson}>Toggle me...!</button>
       {persons}
      </div>
    );
    // return React.createElement('div','null','h1','welcome to react learning')
    //return React.createElement('div',{className: 'App'},React.createElement('h1','null','welcome to react learning'));
  }
}

export default App;
