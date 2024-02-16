import cross from  "../../../assets/cross-svgrepo-com.svg";

export default function Login({ handleModal, handleChange, handleSubmit, formData }) {
    return (
        <form className="PMS__modal_login" onSubmit={handleSubmit}>
            <button onClick={handleModal}>
                <img className="cross" src={cross} alt="cross" />
            </button>
            <div className="PMS__modal_login-inputs">
                <label htmlFor="login-student_id">Student ID: 
                    <input 
                        id="login-student_id" 
                        name="student_id" 
                        placeholder="Student ID" 
                        type="text"
                        onChange={handleChange}
                        value={formData.student_id}
                        required 

                    />
                </label>
                <label htmlFor="login-password">Password: 
                    <input 
                        id="login-password" 
                        name="password" 
                        placeholder="Password" 
                        type="password"
                        onChange={handleChange}
                        value={formData.password}
                        required 

                    />
                </label>
            </div>
            <div className="PMS__modal_login-buttons">
                <button type="submit">Login</button>
            </div>
        </form>
    )
}