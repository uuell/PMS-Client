import { Routes, Route } from "react-router-dom";

import  Homepage  from "./pages/Hompage";
import  Scan  from "./pages/Scanpage";
import Reserve from "./pages/Reservepage.jsx";
import Admin from "./pages/Admin.jsx";
import { Navbar } from "./components/index";
import "./app.css"


export default function App() {
    
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/reservation" element={<Reserve />} />
                <Route path="/scan" element={<Scan />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </>
    )
}