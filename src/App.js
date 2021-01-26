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
    setCheckTerm(evt.target.value);
    console.log(evt.target.value);
  };

  const hello_world = new Sentence('Hello', 'World!');
  const react_rocks = new Sentence('React', 'rocks!');

  const [checkTerm, setCheckTerm] = React.useState(
    localStorage.getItem("input") || "nothing"
  );

  React.useEffect(
    () => {
      localStorage.setItem("input", checkTerm);
    },
    [checkTerm]
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
          <Input
            id = "check"
            value1 = "Check: "
            value2 = "Checking for "
            onInput={handleInput}
            userInput={checkTerm}
          />
        </p>
      </header>
    </div>
  );

};

const Input = ({ id, value1, value2, type='text', onInput, userInput }) => (
  <>
    <label htmlFor={id}>{value1} </label>
    <input id={id} type={type} value={userInput} onChange={onInput} />
    <p>{value2} <b>{userInput}</b></p>
  </>
);

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
