import "./scannermodal.css";

export default function ScannerModal({ handleSubmit, parked }) {
    return (
        <div className="PMS__scanner_modal">
            <form className="PMS__scanner_modal-container" onSubmit={handleSubmit}>
                <div className="PMS__scanner_modal_buttons">
                    { parked ? 
                    <>
                        <p className="description">You're leaving URSM. Have a safe trip!</p>
                        <button className="leave_btn" type="submit">Leave</button> 
                    </>
                    :
                    <>
                        <p className="description">Welcome to URSM!</p>
                        <button className="park_btn" type="submit">Park In</button>
                    </>
                    }
                </div>
             </form>
        </div>
    );
}