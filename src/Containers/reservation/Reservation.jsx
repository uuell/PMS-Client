import { useState, useEffect } from "react";

import { QRmodal, Pagination, Parking } from "../../components/index";
import "./reservation.css";

export default function Reservation() {
    const [qrCodeImage, setQrCodeImage] = useState(null);
    const [modal, setModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState({});


    async function handleReserve() {
        const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
        const reserved = sessionStorage.getItem("reserved");

        if (isLoggedIn && reserved === "true") {
            console.log("getting qrcode form session storage");
            const qrCodeDataUrl = sessionStorage.getItem("qrcode_image");
            setQrCodeImage(qrCodeDataUrl);
            setModal(() => !modal )

        } else if(isLoggedIn && reserved === "false") {
            const user_id = sessionStorage.getItem("user_id");

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
                    sessionStorage.setItem("qrcode_image", data.qrCodeDataUrl);
                    sessionStorage.setItem("reserved","true");
                    setQrCodeImage(data.qrCodeDataUrl);
                    setModal(() => !modal )

                }
            } catch (error) {
                // HANDLE ERROR
            }
        } else {
            alert("user not logged in");
        }
    }

    function handleDownload() {
        if (qrCodeImage) {
            const link = document.createElement("a");
            link.href = qrCodeImage;
            link.download = "qrcode.png"; // Set the desired filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    function handleModal() {
        setModal(() => !modal )
    }

    

    useEffect( () => {
        async function fetchParkingSlot() {
            const response = await fetch("http://localhost:4000/api/parkingslots", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ currentPage: currentPage })
            });

            if (response.ok) {
                const parkingSlots = await response.json();
                // console.log(parkingSlots);
                setData(parkingSlots);
            }
        }

        fetchParkingSlot();
    }, [currentPage]);
    

    return (
        <div className="PMS__reservation">
            <button className="PMS__reservation-buttons" onClick={handleReserve}>Make Reservation</button>
            <Parking data={data}/>
            <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            {(qrCodeImage && modal) && 
                <QRmodal qrImage={qrCodeImage} handleDownload={handleDownload} handleModal={handleModal} />
            }
        </div>
    )
}