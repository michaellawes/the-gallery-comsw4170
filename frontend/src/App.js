import PageHeader from './components/HeaderComponents/PageHeader';
import './App.css';
import Feed from './pages/Feed';

function App() {
  const getProfileIcon = () => {
    return "";
  }

  return (
    <div className="App">
      <div>
        <PageHeader src={getProfileIcon} />
        <Feed profileIcon={""}/>
      </div>
    </div>
  );
}

export default App;
