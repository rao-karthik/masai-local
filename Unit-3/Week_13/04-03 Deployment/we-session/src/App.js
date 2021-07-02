import logo from './logo.svg';
import './App.css';
import { Routes } from './Pages/Routes';

function App() {

  const env = process.env.NODE_ENV
  const baseURL = process.env.REACT_APP_BASE_URL

  return (
    <div className="App">
      {`${env} - ${baseURL}`}
      <Routes />
    </div>
  );
}

export default App;
