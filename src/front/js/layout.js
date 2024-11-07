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
        <BrowserRouter basename={basename}>
            <ParticlesBackground />
            <Navbar />
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<h1>Not found!</h1>} path="*" />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default injectContext(Layout);
