import '../styles/App.css';
import Navbar from './Navbar.jsx';
import { useParams } from "react-router-dom";
import {useState} from "react";
import Home from './Home.jsx';
import Shop from './Shop.jsx';

function App() {
  //homepage
  const {name} = useParams();
  const [cartItems, setCartItems] = useState(0);

  return (
    <div className="container">
      <Navbar cartItems={cartItems} setCartItems={setCartItems}/>
      <div className="content">
        {name === "cart" ? (<Shop />) : (<Home />)}
      </div>
    </div>
  );
}

export default App
