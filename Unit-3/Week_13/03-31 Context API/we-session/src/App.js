import logo from './logo.svg';
import React from 'react';
import './App.css';
import { AuthContext } from './Context/AuthContextProvider';
import {Navbar} from './Components/Navbar';
import { ThemeContext } from './Context/ThemeContextProvider';

function App() {
  const {isAuth} = React.useContext(AuthContext)

  const { theme } = React.useContext(ThemeContext)
  
  return (
    <div style ={{background: theme.bodyBackground, color: theme.textColor}}
    className="App">
      <h2>{ isAuth ? "User is  logged In" : "User is Logged Out"}</h2>
      <Navbar />
    </div>
  );
}

export default App;
