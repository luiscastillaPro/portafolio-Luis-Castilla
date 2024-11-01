import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackendURL } from "./component/backendURL";
import Home from "./pages/home.js";
import injectContext from "./store/appContext";
import Navbar from "./component/navbar.jsx";
import ParticlesBackground from "./component/ParticlesBackground.jsx";
import Footer from "./component/footer.jsx";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ParticlesBackground />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<h1>Not found!</h1>} path="*" />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
    
};

export default injectContext(Layout);
