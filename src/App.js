import logo from './logo.svg';
import './App.css';
import React from 'react';

class Sentence {
  constructor(word1, word2) {
    this.word1 = word1;
    this.word2 = word2;
  }

  getSentence() {
    return this.word1 + ' ' + this.word2;
  }
}

// function declaration 
// function name() {...}

// arrow function: 
// const name() => { ... } 


const App = () => {

  const handleInput = evt => {
    console.log(evt.target.value);
  };

  const hello_world = new Sentence('Hello', 'World!');
  const react_rocks = new Sentence('React', 'rocks!');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* creating/instantiating an instance of List component */}
          <List first={hello_world} second={react_rocks} />
        </p>
        <p>
          <Input onInput = {handleInput} />
        </p>
      </header>
    </div>
  );

};

const Input = props => {
  
  const handleEvent = evt => {
    setCheckTerm(evt.target.value);
    props.onInput(evt);
  };

  const [checkTerm, setCheckTerm] = React.useState("nothing");

  return (
    <div>
      <label htmlFor="Check">Check: </label>
      <input id="check" type="text" onChange={handleEvent} />
      <p>Checking for <b>{checkTerm}</b></p>
    </div>
  );
}

const List = props => {
  return (
    <div>
      {props.first.getSentence()}
      <hr />
      {props.second.getSentence()}
    </div>
  );
};


export default App;
