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

// ------------------------------------------------
// INSERT YOUR TODO SECTION OF CODE BELOW
// ------------------------------------------------
const useMyCustomHook = ... {
...
};

const App = () => {

  const handleInput = evt => {
    setCheckTerm(evt.target.value);
    console.log(evt.target.value);
  };

  const hello_world = new Sentence('Hello', 'World!');
  const react_rocks = new Sentence('React', 'rocks!');

  // Your "key" is 'React'
  // Your "initialState" is 'Redux'
  const [checkTerm, setCheckTerm] = useMyCustomHook(
    'React',
    'Redux'
  );

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* creating/instantiating an instance of List component */}
          <List first={hello_world} second={react_rocks} />
        </p>
        <p>
          <Input onInput = {handleInput} userInput = {checkTerm} />
        </p>
      </header>
    </div>
  );

};

const Input = props => {  
  return (
    <div>
      <label htmlFor="Check">Check: </label>
      <input id="check" type="text" value={props.userInput} onChange={props.onInput} />
      <p>Checking for <b>{props.userInput}</b></p>
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
