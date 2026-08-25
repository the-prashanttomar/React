import { useState } from "react";
import { Link } from "react-router";

import {useInternetStatus } from '../utils/useInternetStatus'
const Header = () => {
    const [btnName, setBtnName] = useState("Login") // usestate will rerender the Header component again
    return (<div className="flex justify-between bg-pink-100 shadow-lg sm:bg-orange-400">
        <div className="w-25">
            <img  src='https://images-platform.99static.com/PqkxPzdIGHYlwJzMzFSLbWCaI0g=/0x0:1181x1181/500x500/top/smart/99designs-contests-attachments/134/134197/attachment_134197839' alt="Logo" />
        </div>

        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li >Status :- {useInternetStatus() ? "🟢":"🔴"}</li>
                <li className="px-4"><Link to='./'>Home</Link></li>
                <li className="px-4"><Link to='./about'>About Us</Link></li>
                <li className="px-4"><Link to='./contactus'>Contact</Link></li>
                <li className="px-4"><Link to='./Grocery'>Grocery</Link></li>
                <li className="px-4">Cart</li>
                <button  onClick={() => {
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                }}>{btnName}</button>
            </ul>
        </div>
    </div>)
};
export default Header