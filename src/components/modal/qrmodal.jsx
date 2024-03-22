import cross from  "../../assets/cross-white.svg";
import "./qrmodal.css";

export default function QRmodal({ qrImage, handleDownload, handleModal}) {
  return (
    <div className="PMS__qrmodal">
        <div className="PMS__qr-container">
            <img onClick={handleModal}  className="cross" src={cross} alt="cross" />
            <img className="PMS__QRimage" src={qrImage} alt="qrcode"></img>
            <div className="PMS__descriptions-container">
                <p className="description">Here's your QR code</p>
                <p className="description">The QR code can only be scanned for three hours before it expires.</p>
            </div>
            <button className="PMS__download" onClick={handleDownload}>Download</button>
        </div>
    </div>
  );
}
