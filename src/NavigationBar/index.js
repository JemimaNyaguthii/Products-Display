import React from "react";
import './style.css'
const NavigationBar = () => {
    return(
        <nav className="navbar">
            <a href="/login">Login</a>
            <a href="/products"> Products</a>
        </nav>
    )
}
export default NavigationBar;
