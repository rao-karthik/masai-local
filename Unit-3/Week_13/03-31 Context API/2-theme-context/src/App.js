import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { ThemeContext } from './Context/ThemeContextProvider';

function App() {

  const {theme} = React.useContext(ThemeContext);
  
  return (
    <div style = {{background: theme.backgroundColor}} 
     className="App">
      <Navbar />
    </div>
  );
}

export default App;
