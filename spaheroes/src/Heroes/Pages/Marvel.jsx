import React from "react";
import { HeroList } from "../Components/HeroList";

export const Marvel=()=>{
    return(
        <>
            <h1>Marvel Comics</h1>
            <hr/>

            <HeroList publisher={'Marvel Comics'}/>
        </>
    );
}