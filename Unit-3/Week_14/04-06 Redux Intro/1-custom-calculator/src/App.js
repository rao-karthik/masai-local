import logo from './logo.svg';
import './App.css';
import { Counter } from './Components/Counter';
import { store } from './Redux/store.js'

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
