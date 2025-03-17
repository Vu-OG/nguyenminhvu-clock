import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass as SearchIcon, faCartShopping as ShoppingCardIcon} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <header>
            <div className="logo">
                <h1>EternaTime</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </nav>
            <div className="headerActions">
                <div className="search"><FontAwesomeIcon icon={SearchIcon} /></div>
                <div className="shoppingCard"><FontAwesomeIcon icon={ShoppingCardIcon} /></div>
                <div className="account">Sign In</div>
            </div>
        </header>
    );
}
export default Navbar;