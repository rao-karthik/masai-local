import logo from './logo.svg';
import './App.css';
import CategoryIcon from './components/CategoryIcon';


function App() {
  let arr = [
    {label : "Grocery", src: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"},
    {label : "Electronics", src: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"},
    {label : "Fashion", src: "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"}
  ]
  return (
    <div className="App">
      {
        arr.map(item => <CategoryIcon label = {item.label} src = {item.src} />)
      }
    </div>
  );
}

export default App;
