import { Html5Qrcode } from "html5-qrcode";

export async function getCam() {
    const devices = await Html5Qrcode.getCameras()
    return devices
}

export function scanSuccess(decodedText, decodedResult) {
    console.log(decodedText);
}

export function scanError(err) {
    console.log(err.message)
}

