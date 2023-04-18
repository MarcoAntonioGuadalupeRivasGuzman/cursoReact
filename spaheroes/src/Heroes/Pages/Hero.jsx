import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { GetHeroById, getHeroById } from "../Helpers/getHeroById";

export const Hero=()=>{

    const {id} = useParams();

    const hero = getHeroById(id);

    if(!hero){
        return <Navigate to="/marvel" />
    }

    //console.log(hero)

    return(
        <>
            <h1>{hero.superhero}</h1>
            <p>{hero.characters}</p>
            <p>{hero.first_appearance}</p>
            <p>{hero.publisher}</p>
        </>
    );
}