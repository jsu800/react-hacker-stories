import logo from './logo.svg';
import './App.css';
import React from 'react';

const initialBookmarks = [
  {
    title: 'React Homepage',
    url: 'https://reactjs.org/',
  },
  {
    title: 'Getting Started',
    url: 'https://reactjs.org/docs/getting-started.html',
  },
];

const getAsyncBookmarks = () =>
  new Promise(resolve =>
    setTimeout(
      () => resolve({ data: { bookmarks: initialBookmarks } }),
      3000
    )
  );

function App() {

  const [bookmarks, setBookmarks] = React.useState([]);

  React.useEffect(() => {
    getAsyncBookmarks().then(result => {
      setBookmarks(result.data.bookmarks);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <List links = {bookmarks} />
        </p>
      </header>
    </div>
  );
}

function List({links}) {
  return links.map(item =>
    <div><a href={item.url}>{item.title}</a></div>)
}


export default App;
