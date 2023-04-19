import React, { useMemo } from "react";
import { getHeroesByPub } from "../Helpers/getHeroesByPub";
import { HeroCard } from "./HeroCard";

export const HeroList=({publisher})=>{
    const heroes= useMemo(()=>getHeroesByPub(publisher), [publisher]);

    return(
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
            //heroes.map((heroe)=>(<li key={heroe.id}>{heroe.superhero}</li>))
            heroes.map(hero =>(<HeroCard key={hero.id} {...hero}/>))
            }
        </div>
    )
}