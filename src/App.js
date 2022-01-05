import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import CitySearch from './components/filterSearch';
import {config} from './config/config.js' 

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
    </div>
  );
}

export default App;
