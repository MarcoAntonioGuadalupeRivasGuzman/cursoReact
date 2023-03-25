import React from "react";
import { Link } from "react-router-dom";

const CharactersByHero=({alterEgo,character})=>{
    if(alterEgo !== character){
        return(
            <p>{character}</p>
        )
    }
    else{
        return (<></>);
    }
    
}

export const HeroCard = ({id,superhero,publisher,alter_ego,first_appearance,characters,})=>{

    const heroImage=`/Assets/heroes/${id}.jpg`;
    //const charactersByHero=(<p>{characters}</p>); se define el componente dentro de otro componente 
    //console.log(first_appearance)
    return(
        <div className="col">
            <div className="card">
                <div className="row no-gutter">
                    <div className="col-4">
                        <img src={heroImage} className="card-img" alt={superhero}/>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                //(alter_ego !== characters) && charactersByHero
                                //(alter_ego !== characters) && <p>{characters}</p>
                            }
                            <CharactersByHero alterEgo={alter_ego} character={characters}/>
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`}>Mas info</Link>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}