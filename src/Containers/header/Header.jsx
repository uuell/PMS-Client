import "./header.css";

export default function Header() {
    return (
        <div className="PMS__header">
            <div className="PMS__header-heading">
                <p>Hello <span style={{color: "#002ee3"}}>Giants!</span> Welcome to URSM <span style={{color: "#f4ba1cff"}}>Parking slot Monitoring System</span></p>
            </div>
            <div className="PMS__header-buttons">
                <button className="PMS__header-login">Login</button>
                <button className="PMS__header-signup">Signup</button>
            </div>
        </div>
    )
}