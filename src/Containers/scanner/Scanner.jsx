import { Html5QrcodeScanner } from "html5-qrcode";
import { useState, useEffect } from "react";
import { Modal } from "../../components/index";

import "./scanner.css"
export default function Scanner() {
  console.log("twotime");
  const [scanResult, setScanResult] = useState({
    text: "",
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
      });
    }

    scanner.render(onScanSuccess);

    return () => {
      scanner.clear();
    };
  }, []);

  console.log(scanResult);

  return (
    <div className="PMS__scanner">
      {scanResult.done ? <Modal /> : <div id="reader"></div>}
    </div>
  );
}
