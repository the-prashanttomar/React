import { useState } from "react";
const Header = () => {
    const [btnName, setBtnName] = useState("Login") // usestate will rerender the Header component again
    console.log("header hai haider") // will be called whenever button is clicked
    return (<div className="nav-bar">
        <div className="logo-container">
            <img className="logo" src='./assets/cartBtn.png' alt="Logo" />
        </div>

        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Sign in</li>
                <li>Cart</li>
                <button onClick={() => {
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                }}>{btnName}</button>
            </ul>
        </div>
    </div>)
};
export default Header