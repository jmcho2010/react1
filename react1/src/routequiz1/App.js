import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation.js";
import Home from "./pages/home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/Nopage";

export default function RoutingApp(){
    return(
    <BrowserRouter>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="*" element={<h1>페이지를 찾을 수 없습니다.</h1>} />
            </Route>
        </Routes>
    </BrowserRouter>
    );
}