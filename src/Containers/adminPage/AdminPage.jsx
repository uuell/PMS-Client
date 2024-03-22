import { useState, useEffect } from "react";
import { Form } from "../../components/index";

import "./admin.css";

export default function AdminPage() {
    const [data, setData] = useState([]);

    const getRegistrations= async () => {
        const response = await fetch("http://localhost:4000/api/registration", {
            method: "GET"
        });

        if (response.ok) {
            const json = await response.json();
            console.log(json.data);
            setData(json.data);
        }
    }

    useEffect(() => {
        getRegistrations();
    }, []);

    


    return (
        <div className="PMS__admin">
            <div className="PMS__registrations-container">
            {data.length === 0 ? (
                <div className="no-registrations">No registrations</div>
            ) : (
                data.map((userRegistration) => (
                    <Form 
                        key={userRegistration.id} 
                        email={userRegistration.email} 
                        user_id={userRegistration.user_id}
                        password={userRegistration.password}
                        id_front={userRegistration.id_front}
                        id_back={userRegistration.id_back}
                        getRegistrations={getRegistrations}
                    />
                ))
            )}
            </div>
            {/* PAGINATION */}
        </div>
    );
}