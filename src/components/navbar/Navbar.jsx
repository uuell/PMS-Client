import { useReducer, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Modal } from "../../components/index";
import logo from "../../assets/urslogo.png";
import "./navbar.css";

const initialState = {
    login: false,
    signup: false,
    showModal: false
};

function modalReducer(state, action) {
    switch(action.type) {
        case "LOGIN_MODAL":
            return {login: true, signup: false, showModal: true };
        case "SIGNUP_MODAL":
            return { login: false, signup:true, showModal: true};
        case "CLOSE_MODAL":
            return {initialState}
        default:
            return initialState
    }
}

export default function Navbar() {
    const [isLoggedIn, setIsloggedIn] = useState(false); 
    const [isAdmin, setIsAdmin] = useState(false);
    const [state, dispatch] = useReducer(modalReducer, initialState);

    function handleModal(modalState) {
        if (modalState === "login") {
            dispatch({ type: "LOGIN_MODAL"});
        } else if (modalState === "signup") {
            dispatch({ type: "SIGNUP_MODAL"})
        }    else dispatch({ type: "CLOSE_MODAL"})
    }

    useEffect(() => {
        // console.log("running");
        const isUserLoggedIn = sessionStorage.getItem("isLoggedIn");
        // console.log(isUserLoggedIn);
        isUserLoggedIn === "true" ?  setIsloggedIn(true):setIsloggedIn(false);
    }, [state])

    useEffect(()=> {
        const admin = sessionStorage.getItem("admin");
        admin === "true" ? setIsAdmin(true) : setIsAdmin(false);
        
    }, [isAdmin]);

    return (
        <nav className="PMS__navbar">
            <div className="PMS__navbar-logo">
                <img src={logo}  alt="Urs Logo" />
            </div>
            <ul className="PMS__navbar-links">
                <li><Link to="/" className="Link">Home</Link></li>
                <li><Link to="/reservation" className="Link">Parking</Link></li>
                <li><Link to="/scan" className="Link">Scan</Link></li>
                {isAdmin && <li><Link to="/admin" className="Link">Admin</Link></li>}

            </ul>
            <div className="PMS__navbar-buttons">
             {  isLoggedIn === false ? <button className="PMS__navbar-login" onClick={() => handleModal("login")}>Login</button> : null }
                <button className="PMS__navbar-signup" onClick={() => handleModal("signup")}>Register</button>
            </div>

            { state.login && <Modal category="login" showModal={state.showModal} handleModal={handleModal} /> }
            { state.signup && <Modal category="signup" showModal={state.showModal} handleModal={handleModal} /> }
        </nav>
    )
}