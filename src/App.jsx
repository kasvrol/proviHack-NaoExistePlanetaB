import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import WhoWeAre from "./pages/whoWeAre";
import Tissues from "./pages/tissues";
import Blog from "./pages/blog";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import TissuesDonation from "./pages/tissueDonation";
import Marketplace from "./pages/marketplace";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whoWeAre" element={<WhoWeAre />} />
            <Route path="/tissues" element={<Tissues />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tissuesDonation" element={<TissuesDonation />} />
            <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
    );
}

export default App;
