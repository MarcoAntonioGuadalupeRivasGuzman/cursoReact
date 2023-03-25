import React from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../Auth/Pages/Login";
import { HeroeRoutes } from "../Heroes/routes/HeroeRutes";

export const AppRouter=()=>{
    return(
        <div>
            <Routes>
                <Route  path="login" element={<Login/>}/>
                <Route path="/*" element={<HeroeRoutes/>}/>
            </Routes>
        </div>
    );
}