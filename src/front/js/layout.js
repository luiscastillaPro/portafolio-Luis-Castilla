import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackendURL } from "./component/backendURL";
import Home from "./pages/home";
import injectContext from "./store/appContext";
import Navbar from "./component/navbar.jsx";
import { Footer } from "./component/footer";
import ParticlesBackground from "./component/ParticlesBackground.jsx"

const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ParticlesBackground />
                <Navbar />
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<h1>Not found!</h1>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
