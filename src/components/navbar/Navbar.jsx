import { Link } from "react-router-dom";

import logo from "../../assets/urslogo.png";
import "./navbar.css";

export default function Navbar() {
    return (
        <nav className="PMS__navbar">
            <div className="PMS__navbar-logo">
                <img src={logo}  alt="Urs Logo" />
            </div>
            <ul className="PMS__navbar-links">
                <li><Link to="/" className="Link">Home</Link></li>
                <li><Link to="/reservation" className="Link">Reservation</Link></li>
                <li>
                    <Link to="/scan" className="Link">Scan</Link>
                </li>

            </ul>
            <div className="PMS__navbar-URS">
                <p>University of Rizal System</p>
            </div>
        </nav>
    )
}