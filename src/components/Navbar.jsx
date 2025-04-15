import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar({cartItems, setCartItems}) {

    return(
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="cart">Cart</Link>
            <div className="cartitems">{cartItems}</div>
        </div>
    );

}

export default Navbar;