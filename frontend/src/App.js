import logo from './logo.svg';
import PageHeader from './components/HeaderComponents/PageHeader';
import './App.css';
import Feed from './pages/Feed';

function App() {
  const getProfileIcon = () => {
    return "";
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <PageHeader src={getProfileIcon} />
        <Feed profileIcon={""}/>
      </div>
    </div>
  );
}

export default App;
