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

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* creating/instantiating an instance of List component */}
          <List />
          {/* creating/instantiating ANOTHER instance of List component */}
          <List />
        </p>
      </header>
    </div>
  );
}

function List() {
  const hello_world = new Sentence('Hello', 'World!');
  const react_rocks = new Sentence('React', 'rocks!');

  return (
    <div>
      {hello_world.getSentence()}
      <hr />
      {react_rocks.getSentence()}
    </div>
  );
}


export default App;
