import logo from './logo.svg';
import './App.css';
import Counter from './components/state/counter'
import Todo from './components/todo'

function App() {
  return (
    <div className="App">
      <Counter />
      <Todo />
    </div>
  );
}

export default App;
