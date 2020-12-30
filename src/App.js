import logo from './logo.svg';
import './App.css';

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

  const handleEvent = event => {
    console.log(event);
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
        <div>
          <label htmlFor="Check">Check: </label>
          <input id="check" type="text" onChange={handleEvent} />
        </div>
      </header>
    </div>
  );

};


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
