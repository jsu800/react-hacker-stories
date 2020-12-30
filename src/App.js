import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React Homepage',
    url: 'https://reactjs.org/',
  },
  {
    title: 'Getting Started',
    url: 'https://reactjs.org/docs/getting-started.html',
  },
];


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {
            list.map(item =>
              <div><a href={item.url}>{item.title}</a></div>)
          }
        </p>
      </header>
    </div>
  );
}

export default App;
