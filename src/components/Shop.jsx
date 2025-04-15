import Navbar from './Navbar.jsx';
import Card from './Card.jsx';
import { useState } from 'react';

function Shop() {
    const [cartItems, setCartItems] = useState(0);

    return(
        <div className="shopcontainer">
            <Navbar cartItems={cartItems} setCartItems={setCartItems}/>
            <div className="shopcontent">

            </div>
        </div>
    );
}

export default Shop;