import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => (
    <div className="Nabvar-container">
        <div className="logo">
            <img src="./src/Logo">
            </img>
        </div>
        <div className="nav-items">
            <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to = "/about">About Us</Link></li>
            <li><Link to = "/contact">Contact Us</Link></li>
            </ul>
        </div>
    </div>
);

export default Header;