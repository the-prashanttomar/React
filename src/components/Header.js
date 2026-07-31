const Header = () => (
    <div className="nav-bar">
        <div className="logo-container">
            <img className="logo" src='./assets/cartBtn.png' alt="Logo" />
        </div>

        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Sign in</li>
                <li>
                    <img className="logo" src='./assets/cartBtn.png' alt="Cart" />
                </li>
            </ul>
        </div>
    </div>
);
export default Header