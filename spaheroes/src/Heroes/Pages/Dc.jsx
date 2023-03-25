import React from "react";
import { HeroList } from "../Components/HeroList";

export const Dc=()=>{
    return(
    <>
        <h1>DC Comics</h1>
        <hr/>
        <HeroList publisher={'DC Comics'} />
    </>
    );
}