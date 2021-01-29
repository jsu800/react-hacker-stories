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
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    getAsyncBookmarks().then(result => {
      setBookmarks(result.data.bookmarks);
      setIsLoading(false);
    }).catch(()=> setIsError(true));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {isError && <p>Erorr just happened ... </p>}          
          {
            isLoading ? (<p>Loading ...</p>) : <List links = {bookmarks} /> 
          }
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
