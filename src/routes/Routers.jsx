import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import Services from "../pages/Services";
import Developers from "../pages/Developers";
import DevelopersDetails from "../pages/DevelopersDetails";
import { Routes,Route } from "react-router-dom";
import Acces from "../components/UserAcces/Acces";



const Routers = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<Developers />} />
        <Route path="*" element={<Error />} />
        <Route path="/acces" component={Acces} />
    </Routes>
}

export default Routers;