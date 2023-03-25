import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../../Ui/Components/NavBar";
import {Marvel} from "../Pages/Marvel"
import {Dc} from "../Pages/Dc"
import { Search } from "../Pages/Search";
import { Hero } from "../Pages/Hero";

export const HeroeRoutes=()=>{
    return(
        <>
            <NavBar />

            <div className="container">
                <Routes>
                    <Route path="marvel" element={<Marvel />}/>
                    <Route path="dc" element={<Dc/>}/>
                    <Route path="search" element={<Search/>}/>
                    <Route path="hero" element={<Hero/>}/>
                    <Route path="/" element={<Navigate to="/marvel"/>}/>
                </Routes>
            </div>
            
        </>
    );
}