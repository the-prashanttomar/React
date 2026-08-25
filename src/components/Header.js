import { useState } from "react";
import { Link } from "react-router";
const Header = () => {
    const [btnName, setBtnName] = useState("Login") // usestate will rerender the Header component again
    console.log("header hai haider") // will be called whenever button is clicked
    return (<div className="nav-bar">
        <div className="logo-container">
            <img className="logo" src='./assets/cartBtn.png' alt="Logo" />
        </div>

        <div className="nav-items">
            <ul>
                <li><Link to='./'>Home</Link></li>
                <li><Link to='./about'>About Us</Link></li>
                <li><Link to='./contactus'>Contact</Link></li>
                <li>Cart</li>
                <button onClick={() => {
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                }}>{btnName}</button>
            </ul>
        </div>
    </div>)
};
export default Header