import "./form.css";

export  default function Form({ email, user_id, password, id_front, id_back, getRegistrations}) {

    async function handleDelete(e) {
        console.log(email);

        const response = await fetch("http://localhost:4000/api/deleteRegistration", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, user_id: user_id}),
        });

        if (response.ok) {
            getRegistrations()
            console.log("deleted succesfully");
        }

    }

    async function handleSubmit() {
        const response = await fetch("http://localhost:4000/api/newUser", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: user_id, password: password}),
        });

        if (response.ok) {
            alert("added a new User");
            getRegistrations()
        }
    }

    return (
        <form className="user-container" onSubmit={handleSubmit}>
            <p>Student_id: {user_id}</p>
            <p>Email: {email}</p>
            <img src={id_front} alt="front ID"></img>
            <img src={id_back} alt="back ID"></img>
            <div>
                <button type="submit" className="accept-button">Accept</button>
                <button className="delete-btn" type="button" onClick={handleDelete}>Delete</button>
            </div>
        </form>
    )
}