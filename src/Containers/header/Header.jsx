import { useReducer } from "react";

import { Modal } from "../../components/index";
import "./header.css";

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

export default function Header() {
    const  [state, dispatch] = useReducer(modalReducer, initialState);

    function handleModal(modalState) {
        if (modalState === "login") {
            dispatch({ type: "LOGIN_MODAL"});
        } else if (modalState === "signup") {
            dispatch({ type: "SIGNUP_MODAL"})
        }    else dispatch({ type: "CLOSE_MODAL"})
    }

    // console.log(state);

    return (
        <div className="PMS__header">
            <div className="PMS__header-heading">
                <p>Hello Giants! <span style={{color: "#f4ba1cff"}}>Welcome to URSM</span></p>
                <p><span style={{color: "#0740b6", fontSize: "45px"}}>Parking slot</span> <span style={{color: "#f4ba1cff", fontSize: "45px"}}> Monitoring System</span></p>
            </div>
            <div className="PMS__header-buttons">
                <button className="PMS__header-login" onClick={() => handleModal("login")}>Login</button>
                <button className="PMS__header-signup" onClick={() => handleModal("signup")}>Signup</button>
            </div>

            { state.login && <Modal category="login" showModal={state.showModal} handleModal={handleModal} /> }
            { state.signup && <Modal category="signup" showModal={state.showModal} handleModal={handleModal} /> }

        </div>
    )
}