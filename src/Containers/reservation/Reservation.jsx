import { useState } from "react";
import "./reservation.css";

export default function Reservation() {
    const [qrDataUrl, setQrDataUrl] = useState(null);

    async function handleReserve() {
        const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
        const user_id = sessionStorage.getItem("user_id")
        if(isLoggedIn) {
            console.log("making a reservation please wait");

            try {
                const response = await fetch("http://localhost:4000/api/reserve", {
                    method: "POST",
                    headers: {
                       "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ user_id: user_id })
                });

                if (response.ok) {
                    console.log("you have a reservation");
                    const data = await response.json();
                    setQrDataUrl(data.qrCodeDataUrl)
                }
            } catch (error) {
                
            }
        } else {
            alert("user not logged in");
        }
    }

    function handleDownload() {
        if (qrDataUrl) {
            const link = document.createElement("a");
            link.href = qrDataUrl;
            link.download = "qrcode.png"; // Set the desired filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }


    return (
        <div className="PMS__reservation">
            <button onClick={handleReserve}>Reserve</button>
            {qrDataUrl && (
                <div>
                    <img src={qrDataUrl} alt="qrcode"></img>
                    <button onClick={handleDownload}>Download</button>
                </div>
            )}
        </div>
    )
}