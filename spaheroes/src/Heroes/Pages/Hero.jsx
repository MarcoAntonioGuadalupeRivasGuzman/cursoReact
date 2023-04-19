import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { GetHeroById, getHeroById } from "../Helpers/getHeroById";

export const Hero=()=>{

    const {id} = useParams();

    const hero = useMemo(()=> getHeroById(id), [id]);

    const regresa=useNavigate();

    const onNavigateBack=()=>{
        if(hero.publisher === 'Marvel Comics'){
            regresa("/marvel")
        }
        if(hero.publisher === 'DC Comics'){
            regresa("/dc")
        }
        
    }

    if(!hero){
        return <Navigate to="/marvel" />
    }

    //console.log(hero)

    return(
        <div className="row mt-5">
            <div className="col-4">
                <img src={`/Assets/heroes/${id}.jpg`} alt="" className="img-thumbnail"/>
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego}</li>
                    <li className="list-group-item"> <b>Publisher:</b> {hero.publisher}</li>
                    <li className="list-group-item"> <b>First appearence:</b> {hero.first_appearance}</li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>
                <button className="btn btn-outline-primary" onClick={onNavigateBack}>Regresar</button>
            </div>
        </div>
    );
}