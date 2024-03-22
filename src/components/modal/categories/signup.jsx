import logo from "../../../assets/urslogo.png";
import cross from  "../../../assets/cross-svgrepo-com.svg";

export default function Signup({ handleModal, handleChange, handleSubmit, formData }) {
    return (
        <form className="PMS__modal_signup" onSubmit={handleSubmit}>
            <img onClick={handleModal} className="cross" src={cross} alt="cross" />
            <div className="PMS__modal-logo-container">
                <img src={logo}  alt="Urs Logo" className="PMS__modal-logo" />
            </div>
            <div className="PMS__modal_signup-inputs">
                <div className="PMS__modal_signup-container">
                    <label htmlFor="signup-student_id"><b>Student ID:</b></label>
                        <input 
                            id="signup-student_id" 
                            name="student_id" 
                            placeholder="Student ID" 
                            type="text"
                            value={formData.student_id}
                            onChange={handleChange}
                            required 
                        />
                </div>
                <div className="PMS__modal_signup-container">
                    <label htmlFor="signup-email"><b>Email:</b></label>
                        <input 
                            id="signup-email" 
                            name="email" 
                            placeholder="Email" 
                            type="email"
                            autoComplete="on"
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                </div>
                <div className="PMS__modal_signup-container">
                    <label htmlFor="signup-password"><b>Password:</b></label>
                        <input 
                            id="signup-password" 
                            name="password" 
                            placeholder="Password" 
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required 
                        />
                </div>
                <div className="PMS__modal_signup-container">
                    <label htmlFor="signup-ID">
                        <b>URS ID front and back:</b>
                        <p className="note"><b>Note:</b> Ensure the size stays under 500kb!&#128522;</p>
                    </label>
                    <input 
                        id="signup-ID" 
                        name="identificationCardFront" 
                        placeholder="Identification Card" 
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={handleChange}
                        required 
                    />
                    <input 
                        name="identificationCardBack" 
                        placeholder="Identification Card" 
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={handleChange}
                        required 
                    />
                </div>
            </div>
            <div className="PMS__modal_signup-buttons">
                <button type="submit">Signup</button>
            </div>
        </form>
    )
}