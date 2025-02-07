import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation.js";
import Home from "./home";
import About from "./About.js";
import Products from "./Products.js";


export default function RoutingApp(){
    return(
    <BrowserRouter>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="/about/:gunchimssak" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="*" element={<h1>페이지를 찾을 수 없습니다.</h1>} />
            </Route>
        </Routes>
    </BrowserRouter>
    );
}