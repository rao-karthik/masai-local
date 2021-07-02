import './App.css';
import { Timeout } from './Components/Timeout';
import { FetchData } from './Components/FetchData';
import { Merge } from './Components/Merge';

function App() {
  return (
    <div className="App">
      <Timeout />
      {/* <FetchData /> */}
      <Merge />
    </div>
  );
}

export default App;
