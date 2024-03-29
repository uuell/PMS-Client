import { useState } from "react";
import Login from "./categories/Login";
import Signup from "./categories/signup";

import "./modal.css";

export default function Modal({ category, showModal, handleModal }) {
    const [signUpForm, setSignUpForm] = useState({
      student_id: "",
      email: "",
      password: "",
      identificationCardFront: null,
      identificationCardBack: null
    });
    const [formData, setFormData] = useState({
        student_id: "",
        password: ""
    });


    function handleSignUpChange (e) {
      const { name, value, files } = e.target;

      setSignUpForm(prevState => ({
        ...prevState,
        [name]: name === 'identificationCardFront' || name === 'identificationCardBack' ? files[0] : value,
      }));

      // // If it's a file input, set the file directly in the state
      // if ((name === "identificationCardFront" || name === "identificationCardBack") && files && files[0]) {
      //   const reader = new FileReader();

      //   reader.readAsDataURL(files[0]);

      //   reader.onloadend = () => {
      //     setSignUpForm({
      //       ...signUpForm,
      //       [name]: reader.result, // reader.result contains the base64-encoded content
      //     });
      //   };
      // } else {
      //   // If it's a regular input, set the value in the state
      //   setSignUpForm({
      //     ...signUpForm,
      //     [name]: value,
      //   });
      // }
    };

    function handleChange(e) {
        // console.log(e.target);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    

    async function handleSubmitSignUp(e) {

        // e.preventDefault()
        // const formData = JSON.stringify(signUpForm);
        const signUpFormData = new FormData();
        for (const key in signUpForm) {
          signUpFormData.append(key, signUpForm[key]);
        }
        // console.log(formData);
        // for (const pair of signUpFormData.entries()) {
        //   console.log(pair[0], pair[1]);
        // }
        
        try {
            const response = await fetch('http://localhost:4000/api/registration', {
              method: 'POST',
              body: signUpFormData,
            });
      
            if (response.ok) {
              // console.log('Form data submitted successfully');
              alert("Registration successful. Currently processing.")
            } 
            if(!response.ok) {
              const  errorMessage = await response.json();
              alert(errorMessage.error);
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    }

    async function handleSubmitLogin(e) {

        // e.preventDefault(); 
        const logInFormData = new FormData();
        for(const key in formData) {
          logInFormData.append(key, formData[key]);
        }
        
        try {
            const response = await fetch('http://localhost:4000/api/authentication', {
              method: 'POST',
              body: logInFormData,
            });


            const responseData = await response.json();

            if(responseData.isAdmin) {
              alert("You are the ADMIN");
              sessionStorage.setItem("admin", true);
              sessionStorage.setItem("isLoggedIn", true);

            } else if (response.ok) {
              alert("You are a student of URSM");

              // Store user ID in sessionStorage
              sessionStorage.setItem("user_id", responseData.user_id);
              sessionStorage.setItem("reserved", responseData.reserved);
              sessionStorage.setItem("qrcode_image", responseData.qrcode_image);
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
                    { category === "signup" && <Signup handleModal={handleModal} handleChange={handleSignUpChange} handleSubmit={handleSubmitSignUp} formData={signUpForm} /> }
                </div>
            }
        </>
    )
}