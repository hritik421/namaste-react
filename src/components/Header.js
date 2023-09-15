import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => (
    <div className="flex  justify-between mb-4 text-xl">
        <div className="logo">
            <img src="./src/Logo">
            </img>
        </div>
        <div>
            <ul className="flex ">
            <li className="mx-4"><Link to ="/">Home</Link></li>
            <li className="mx-4"><Link to = "/about">About Us</Link></li>
            <li className="mx-4 "><Link to = "/contact">Contact Us</Link></li>
            </ul>
        </div>
    </div>
);

export default Header;