import logo from './logo.svg';
import './App.css';
import ReactMenu from "./component/component"

function App() {
  return (
    <div className="App">
      <ReactMenu label = "JOIN US" />
      <ReactMenu label = "SETTINGS" /><br></br>
      <ReactMenu label = "LOGIN" />
      <ReactMenu label = "CONTACT US" /><br></br>
      <ReactMenu label = "SEARCH" />
      <ReactMenu label = "HELP" /><br></br>
      <ReactMenu label = "HOME" />
      <ReactMenu label = "DOWNLOAD" />
    </div>
  );
}

export default App;
