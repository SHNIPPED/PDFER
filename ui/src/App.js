import './App.css';
import Search from './../src/components/search/search.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import popoga from './pepego.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={popoga} className="App-logo" alt="logo" />
        <div>
        <Search/>
        </div>
      </header>
    </div>
  );
}

export default App;
