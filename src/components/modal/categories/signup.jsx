import cross from  "../../../assets/cross-svgrepo-com.svg";

export default function Signup({ handleModal, handleChange, handleSubmit, formData }) {
    return (
        <form className="PMS__modal_signup" onSubmit={handleSubmit}>
            <div onClick={handleModal}>
                <img className="cross" src={cross} alt="cross" />
            </div>
            <div className="PMS__modal_signup-inputs">
                <label htmlFor="signup-student_id">Student ID: 
                    <input 
                        id="signup-student_id" 
                        name="student_id" 
                        placeholder="Student ID" 
                        type="text"
                        value={formData.student_id}
                        onChange={handleChange}
                        required 

                    />
                </label>
                <label htmlFor="signup-password">Password: 
                    <input 
                        id="signup-password" 
                        name="password" 
                        placeholder="Password" 
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required 

                    />
                </label>
            </div>
            <div className="PMS__modal_signup-buttons">
                <button type="submit">Signup</button>
            </div>
        </form>
    )
}