import "./modal.css";

export default function Modal() {
    return (
        <div className="PMS__modal">
            <div className="PMS__modal-buttons">
                <button className="PMS__modal-checkin">Check In</button>
                <button className="PMS__modal-checkout"> Check out</button>
            </div>
        </div>
    )
}