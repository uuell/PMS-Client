import cross from  "../../../assets/cross-svgrepo-com.svg";
import logo from "../../../assets/urslogo.png";


export default function Login({ handleModal, handleChange, handleSubmit, formData }) {
    return (
        <form className="PMS__modal_login" onSubmit={handleSubmit}>
            <img onClick={handleModal} className="cross" src={cross} alt="cross" />
            <div className="PMS__modal-logo-container">
                <img src={logo}  alt="Urs Logo" className="PMS__modal-logo" />
            </div>
            <div className="PMS__modal_login-inputs">
                <div className="PMS__modal_login-container">
                    <label htmlFor="login-student_id"><b>Student ID:</b></label>
                    <input 
                        autoFocus
                        id="login-student_id" 
                        name="student_id" 
                        placeholder="Student ID" 
                        type="text"
                        onChange={handleChange}
                        value={formData.student_id}
                        required 
                    />
                </div> 
                <div className="PMS__modal_login-container">
                    <label htmlFor="login-password"><b>Password:</b></label>
                    <input 
                        id="login-password" 
                        name="password" 
                        placeholder="Password" 
                        type="password"
                        onChange={handleChange}
                        value={formData.password}
                        required 

                    />
                </div>
            </div>
            <div className="PMS__modal_login-buttons">
                <button type="submit">Login</button>
            </div>
        </form>
    )
}