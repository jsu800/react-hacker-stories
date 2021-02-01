import logo from './logo.svg';
import './App.css';
import React from 'react';

const bookmarksEndpoint = "https://hn.algolia.com/api/v1/search?query=";

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

const App = () => {

  const handleInput = evt => {
    setCheckTerm(evt.target.value);
    console.log(evt.target.value);
  };

  const [checkTerm, setCheckTerm] = React.useState();
  const [url, setUrl] = React.useState(
    `${bookmarksEndpoint}${checkTerm}`
  );
  const [bookmarks, dispatchBookmarks] = React.useReducer(
    bookmarksReducer,
    {
      data: [],
      isLoading: false,
      isError: false
    }
  );

  React.useEffect(() => {

    if (!checkTerm) return;

    dispatchBookmarks({ type: 'BOOKMARKS_LOADING_INIT' })
    fetch(url)
      .then(response => response.json())
      .then(result => {
        dispatchBookmarks({
          type: 'BOOKMARKS_LOADING_SUCCESS',
          payload: result.hits
        });
      }).catch(
        () => dispatchBookmarks({
          type: 'BOOKMARKS_LOADING_FAILURE'
        })
      );
  }, [url]);

  const handleInputSubmit = () => {
    setUrl(`${bookmarksEndpoint}${checkTerm}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Input
            id="check"
            value="Checking for "
            onInput={handleInput}
            userInput={checkTerm}
          >
            <b>Check: </b>
          </Input>
        </p>
        <p>
          <button
            type="button"
            disabled={!checkTerm}
            onClick={handleInputSubmit}
          >
            Submit
          </button>
        </p>
        <p>
          {bookmarks.isError && <p>Erorr just happened ... </p>}
          {
            bookmarks.isLoading ? (<p>Loading ...</p>) : <List links={bookmarks} />
          }
        </p>
      </header>
    </div>
  );
};

const Input = ({ id, value, type = 'text', onInput, userInput, children }) => (
  <>
    <label htmlFor={id}>{children} </label>
    <input id={id} type={type} value={userInput} onChange={onInput} />
    <p>{value} <b>{userInput}</b></p>
  </>
);

function List({ links }) {
  return links.data.map(item =>
    <div><a href={item.url}>{item.title}</a></div>)
}

export default App;
