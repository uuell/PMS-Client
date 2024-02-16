import { Html5QrcodeScanner } from "html5-qrcode";
import { useState, useEffect } from "react";
import { Modal } from "../../components/index";

import "./scanner.css"
export default function Scanner() {
  const [scanResult, setScanResult] = useState({
    text: null,
    result: "",
    done: false
  });

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    function onScanSuccess(decodedText, decodedResult) {
      scanner.clear();
      setScanResult(() => {
        return { text: decodedText, result: decodedResult, done: true };
      },);
    }

    scanner.render(onScanSuccess);

    return () => {
      scanner.clear();
    };
  });

  console.log(scanResult);

  useEffect(() => {
    
    const verifyReservation = async () => {
      if (scanResult.done) {
        const response =  await fetch("http://localhost:4000/api/verifyReservation", {
          method: "POST",
          headers: {
            "content-Type": "application/json"
          },
          body: scanResult.text,
        });

        console.log(response);

        if (response.ok) {
          alert("reservation succesfull");
          const responseJSON = await response.json();
          console.log(responseJSON);
        } else {
          alert("reservation Expired");
          const responseJSON = await response.json();
          console.log(responseJSON);
        }
      }
    }

    verifyReservation();
  }, [scanResult]);

  return (
    <div className="PMS__scanner">
      <div id="reader"></div>
      {scanResult.done && <Modal />}
    </div>
  );
}
