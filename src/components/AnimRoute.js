import React from "react";
// impor pages
import Home from "../pages/Home";
import About from "../pages/PerkenalanDiri";

// import routes route * useLocation hook
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimRoute = () => {
    const location = useLocation();
    return (
        <AnimatePresence initial={true} mode="wait">
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/perkenalandiri" element={<About />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimRoute;
