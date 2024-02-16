import { useState } from "react";
import Login from "./categories/Login";
import Signup from "./categories/signup";

import "./modal.css";

export default function Modal({ category, showModal, handleModal }) {
    const [formData, setFormData] = useState({
        student_id: "",
        password: ""
    });

    const urlParams = new URLSearchParams(formData);

    function handleChange(e) {
        // console.log(e.target);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    

    async function handleSubmitSignUp(e) {

        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:4000/api/newUser', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: urlParams,
              
            });
      
            if (response.ok) {
              console.log('Form data submitted successfully');
              // You can perform additional actions here
            } else {
              console.error('Failed to submit form data');
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    }

    async function handleSubmitLogin(e) {

        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:4000/api/validateUser', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: urlParams,
            });


            const responseData = await response.json();
            console.log(responseData);

            if (response.ok) {
              alert("You are a student of URSM");

              // Store user ID in sessionStorage
              const userID = formData.student_id;
              sessionStorage.setItem("user_id", userID);
              sessionStorage.setItem("isLoggedIn", true);
              
              // You can perform additional actions here
            } else {
              sessionStorage.setItem("isLoggedIn", false);
              alert("You are not a student of URSM");
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    }

    return (
        <>
            {showModal && 
                <div className="PMS__modal">
                    { category === "login" && <Login  handleModal={handleModal} handleChange={handleChange} handleSubmit={handleSubmitLogin} formData={formData} /> } 
                    { category === "signup" && <Signup handleModal={handleModal} handleChange={handleChange} handleSubmit={handleSubmitSignUp} formData={formData} /> }
                </div>
            }
        </>
    )
}