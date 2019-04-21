import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    UserInput: ''
  }

  onChangelengthHandler = (event) => {
    this.setState({
      UserInput: event.target.value
    })
  }

 charDeleteHandler = (index) => {
   const text = this.state.UserInput.split('');
   text.splice(index,1);
   const updatedText = text.join('');
   this.setState({UserInput: updatedText});

 }


  render() {
    const charlist = this.state.UserInput.split('').map((ch,index) =>{
      return <Char
       character ={ch}
       key={index}
       charclick={() => this.charDeleteHandler(index)}/>
    });

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <input type = "text" onChange={this.onChangelengthHandler} value={this.state.UserInput} />
        <p>The lenght of text entered above is {this.state.UserInput} </p>
        <Validation UserInputlenght= {this.state.UserInput.length} />
        {charlist}
      </div>
    );
  }
}

export default App;
