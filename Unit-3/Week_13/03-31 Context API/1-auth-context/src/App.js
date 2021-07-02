import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/NavBar'
import { LoginStatus } from './Components/LoginStatus'

function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginStatus />
    </div>
  );
}

export default App;
