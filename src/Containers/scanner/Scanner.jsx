import { Html5QrcodeScanner } from "html5-qrcode";
import { useState, useEffect } from "react";
import { ScannerModal } from "../../components/index";

import "./scanner.css";
export default function Scanner() {
  const [responseData, setResponseData] = useState({});
  const [scanResult, setScanResult] = useState({
    text: null,
    result: "",
    done: false,
    showModal: false,
  });

  const verifyReservation = async (text) => {
    const response = await fetch(
      "http://localhost:4000/api/verifyReservation",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: text,
      }
    );

    console.log(response);

    if (response.ok) {
      const responseJSON = await response.json();
      setResponseData(responseJSON);
      setScanResult((prev) => {
        return {
          ...prev,
          done: false,
          showModal: true,
        };
      });
    } else {
      const responseJSON = await response.json();
      alert(responseJSON);
    }
  };

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    function onScanSuccess(decodedText, decodedResult) {
      scanner.clear()
      setScanResult(() => {
        return {
          text: decodedText,
          result: decodedResult,
          done: true,
          showModal: false,
        };
      });
    }

    scanner.render(onScanSuccess);

    return () => {
      scanner.clear();
    };
  });

  console.log(scanResult);

  if (scanResult.done) {
    verifyReservation(scanResult.text)
  }

  async function handleSubmit(e) {
    // e.preventDefault();
    if (responseData.parked) {
      alert("leaving parking space");

      const response = await fetch("http://localhost:4000/api/leavingParking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(responseData),
      });

      if (response.ok) {
        const responseJSON = await response.json();
        alert(responseJSON);
        sessionStorage.setItem("reserved", false);
        sessionStorage.setItem("qrcode_image", " ");
      }
    } else {
      alert("parking in");

      const response = await fetch("http://localhost:4000/api/parking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(responseData),
      });

      if (response.ok) {
        const responseJSON = await response.json();
        alert(responseJSON);
      }
    }
  }

  return (
    <div className="PMS__scanner">
      <div id="reader"></div>
      {scanResult.showModal && (
        <ScannerModal
          handleSubmit={handleSubmit}
          parked={responseData.parked}
        />
      )}
    </div>
  );
}
