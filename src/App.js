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
  new Promise((resolve, reject) => setTimeout(reject, 3000)
  );

const bookmarksReducer = (state, action) => {
  switch (action.type) {
    case 'BOOKMARKS_LOADING_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "BOOKMARKS_LOADING_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case "BOOKMARKS_LOADING_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      throw new Error();
  }
};

function App() {

  const [bookmarks, dispatchBookmarks] = React.useReducer(
    bookmarksReducer,
    {
      data: [],
      isLoading: false,
      isError: false
    }
  );

  React.useEffect(() => {
    dispatchBookmarks({ type: 'BOOKMARKS_LOADING_INIT'})
    getAsyncBookmarks().then(result => {
      dispatchBookmarks({
        type: 'BOOKMARKS_LOADING_SUCCESS',
        payload: result.data.bookmarks,
      });
    }).catch(() => dispatchBookmarks({ type: 'BOOKMARKS_LOADING_FAILURE'})
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {bookmarks.isError && <p>Erorr just happened ... </p>}
          {
            bookmarks.isLoading ? (<p>Loading ...</p>) : <List links={bookmarks} />
          }
        </p>
      </header>
    </div>
  );
}

function List({ links }) {
  return links.data.map(item =>
    <div><a href={item.url}>{item.title}</a></div>)
}


export default App;
